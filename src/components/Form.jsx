import React from "react";

class Form extends React.Component {
    state = {
        firstName: 'firstName!!!',
        email: 'email',
        message: 'message',
        select: '',
        subscript: true,
        color: '#0ff0a5'
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
        console.log(event.target.value)
    }

    clc = (props) => {
        this.setState({email: props.email})
    }

    validateName = () => {
        if (this.state.firstName === 'wowa') {
            alert('Привет, Wowa!')
        }
    }

    // validateEmail = () => {
    //     if (!/(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi.test(this.state.email)) {
    //         console.log('Какой-то мыло ашибко')
    //     }
    // }

    handleCheckboxChange = (event) => {
        this.setState({[event.target.name]: event.target.checked})
    }

    handleColorChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
        console.log(event.target.value)
    }

    handleSend = () => {
        console.log(this.state.color)
        if (this.state.subscript !== false) {
            this.setState({subscript: false})
        } else {
            this.setState({subscript: true})
        }
        
    }

    render () {
        return <div>
            <input 
                type="text"
                name="firstName"
                placeholder="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                onBlur={this.validateName} 
            />
            <input 
                type="email"
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.handleChange}
                onClick={this.clc}
                // onBlur={this.validateEmail} 
            />
            <br/>
            <textarea name="message" value={this.state.message} onChange={this.handleChange}></textarea>
            <br/>
            <select name="select" value={this.state.select} onChange={this.handleChange}>
                <option value="1">{this.state.message}</option>
                <option value={this.state.email}>{this.state.email}</option>
                <option value={this.state.firstName}>{this.state.firstName}</option>
            </select>
            <label>
                <input type="checkbox" name="subscript" checked={this.state.subscript} onChange={this.handleCheckboxChange}/>
                Подписка
            </label>
            <br/>
            <label>
                <input type="color" name="color" value={this.state.color} onChange={this.handleColorChange}/>
                <h3 style={{color:'#954141'}}>Колор</h3>
            </label>
            <input type="range" name="" id="" />
            <button onClick={this.handleSend}>Send</button>
        </div>
    }

}

export {Form}