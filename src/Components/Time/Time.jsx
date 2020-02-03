import React, { Component } from "react";
import "./Time.scss";

const moment = require("moment");

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const now = new moment();
    // const n = d.toLocaleTimeString();
    return <h1 className="time">{now.format("HH:mm")}</h1>;
  }
}

export default Time;
