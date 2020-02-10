import React, { Component } from "react";

import "./Social.scss";

class Download extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="social">
        <a href="https://twitter.com/urlDev" title="Visit my twitter account!" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
      </div>
    );
  }
}

export default Download;
