import React, { Component } from "react";
import { ImageConsumer } from "../../Context";

import "./Top.scss";

class Top extends Component {
  render() {
    return (
      <ImageConsumer>
        {value => {
          return (
            <div className="Top">
              {value.loading ? (
                <h1 class="loading">loading</h1>
              ) : (
                <img src={value.background} alt="" />
              )}
            </div>
          );
        }}
      </ImageConsumer>
    );
  }
}

export default Top;
