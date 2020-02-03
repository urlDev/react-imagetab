import React, { Component } from "react";
import { ImageConsumer } from "../../Context";

import "./Bottom.scss";

class Bottom extends Component {
  render() {
    return (
      <ImageConsumer>
        {value => {
          return (
            <div>
              <a href={value.html} className="btn-primary" target="_blank">
                <img src={require("../../logo.png")} alt="" />
              </a>
            </div>
          );
        }}
      </ImageConsumer>
    );
  }
}

export default Bottom;
