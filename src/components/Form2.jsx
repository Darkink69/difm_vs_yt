import React, { createRef } from "react";

class Form2 extends React.Component {
    constructor() {
        super();
        this.state = {
            card: '',
            email: ''
        }
        // this.firstRef = React.createRef()
    }
    state = {
        color: "#61197b",
        range: '',
        fontSize: ''
    }
    firstRef = React.createRef()
    secondRef = React.createRef()

    componentDidMount() {
        console.log(this.firstRef)
        this.secondRef.current.focus()
    }

    // componentDidUpdate() {
    //     this.secondRef.current.focus()
    // }

    handleChangeColor = (event) => {
        this.setState({color: event.target.value})
    }

    handleChangeRange = (event) => {
        this.setState({range: event.target.value})
    }

    handleChangeFontSize = (event) => {
        this.setState({fontSize: event.target.value})
        if (event.target.value.length === 3) {
            this.firstRef.current.focus()
            this.secondRef.current.value = ''
            console.log('3!')
        }
    }

    render () {
        return <div>
            <input type="text" name="card" ref={this.firstRef}/>
            <h2 style={{color: this.state.color, fontSize: this.state.range + 'px'}}>Цвет</h2>
            <br/>
            <input type="color" name="color" value={this.state.color} onChange={this.handleChangeColor}/>
            <br/>
            <input 
                type="range" 
                name="range" 
                min="10" max="200" 
                value={this.state.fontSize} 
                onChange={this.handleChangeRange}
            />
            <input type="number" name="fontSize" ref={this.secondRef} onChange={this.handleChangeFontSize}/>
            <br/>
            <input type="reset" value="Reset" />
    
        </div>
    }

}



export {Form2}
