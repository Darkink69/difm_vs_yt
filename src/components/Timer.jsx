import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isCount: false
    };
  }

  handleStart = () => {
    this.setState({isCount: true})
    this.counterId = setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)
  }

  handleStop = () => {
    this.setState({isCount: false});
    clearInterval(this.counterId);
  }

  handleReset = () => {
    this.setState({isCount: false, count: 0})
    clearInterval(this.counterId);
  }

  componentDidMount() {
    const userCount = localStorage.getItem('timer');
    if (userCount) {
      this.setState({count: +userCount})
    }
  }
 
  componentDidUpdate() {
    localStorage.setItem('timer', this.state.count)
  }
  
  componentWillUnmount() {
    clearInterval(this.counterId);
  }

  render() {
    const {count, isCount} = this.state
    return (
      <div className="App">
        <h1>{count}</h1>
        {!isCount ? (
          <button onClick={this.handleStart}>Start</button>
        ) : (
          <button onClick={this.handleStop}>Stop</button>
        )}
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Timer;

