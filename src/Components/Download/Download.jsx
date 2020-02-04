import React, { Component } from 'react';
import { ImageConsumer } from "../../Context";

import "./Download.scss";

class Download extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <ImageConsumer>
            {value => {
                return (
                    <a href={`${value.background}=unsplash-${value.user.name}.jpg`}  className="downloadButton" download><i className="fas fa-file-download"></i></a>
                )
            }}
            </ImageConsumer>
        );
    }
}

export default Download;