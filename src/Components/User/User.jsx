import React, { Component } from "react";
import { ImageConsumer } from "../../Context";

import "./User.scss";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ImageConsumer>
        {value => {
          return (
            <div>
              {value.user ? (
                <div className="User">
                <a href={value.user.links.html} target="_blank" rel="noopener noreferrer" ><img src={value.user.profile_image.small} alt="" /></a>
                 <h6>{value.user.name}</h6>
                  
                </div>
              ) : (
                "loading"
              )}
            </div>
          );
        }}
      </ImageConsumer>
    );
  }
}

export default User;
