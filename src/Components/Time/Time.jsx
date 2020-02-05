import React, { Component } from "react";
import "./Time.scss";

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "",
      message: ""
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: new Date().toLocaleString() }, () => this.showMessage()),
      1000
    );
    
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  showMessage = () => {
    if (this.state.time.slice(10, -6) >= 12 && this.state.time.slice(10, -6) < 20 ) {
      this.setState({
        message: "Good afternoon!"
      }) 
    } else if (this.state.time.slice(10, -6) >= 20 ) {
      this.setState({
        message: "Good evening!"
      })
    } else if (this.state.time.slice(10, -6 ) < 5){
      this.setState({
        message: "Good night!"
      })
    } else if (this.state.time.slice(10, -6 ) >= 5 && (this.state.time.slice(10, -6 ) < 12)) {
      this.setState({
        message: "Good morning!"
      })
    }
  
  }

  render() {
    return (
      <div>
        <h1 className="message">{this.state.message}</h1>
        <h1 className="time">{this.state.time.slice(10, -3)}</h1>
      </div>
    );
  }
}

export default Time;
