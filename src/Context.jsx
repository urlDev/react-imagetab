import React, { Component } from "react";
import axios from "axios";
import Unsplash, { toJson } from "unsplash-js";
import { UNSPLASH_KEY, API_KEY } from "./config.js";

const ImageContext = React.createContext();

//unsplash api
const unsplash = new Unsplash({
  accessKey: UNSPLASH_KEY
});

class ImageProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: "",
      loading: true,
      html: ""
    };
  }

  componentDidMount() {
    // this.getWeather();
    this.getPicture();
  }
//feature, outdoor, beautiful, like, life
  getPicture = () => {
    const page = Math.floor(Math.random() * 10);
    unsplash.search.photos("life", page, 29, { orientation: "landscape" })
  .then(toJson)
  .then(json => {
    // Your code
    let result = json.results[Math.floor(Math.random()*json.results.length)];
    this.setState({
      background: result.urls.regular,
      loading: false,
      html: result.links.html
    })
    console.log(json.results, page, this.state.html)
  });
  };

  render() {
    return (
      <ImageContext.Provider
        //these methods will be able to used by consumer after putting them here
        value={{
          ...this.state,
          getPicture: this.getPicture
        }}
      >
        {this.props.children}
      </ImageContext.Provider>
    );
  }
}

//Variable for state consumers
const ImageConsumer = ImageContext.Consumer;

export { ImageProvider, ImageConsumer };
