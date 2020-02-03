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
                <div className="spinner-grow" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
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
