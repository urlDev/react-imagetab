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
              <a href={value.html} target="_blank" rel="noopener noreferrer">
                <img src={require("../../logo_transparent.png")} alt="" />
              </a>
            </div>
          );
        }}
      </ImageConsumer>
    );
  }
}

export default Bottom;
