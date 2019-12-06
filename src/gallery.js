import React, { Component } from "react";
import axios from "axios";
class Gallery extends Component {
  constructor(props) {
    super(props);
  }

  getData = data => {
    axios.get("http://localhost:3000/getData").then(res => console.log(res));
  };

  render() {
    return (
      <div class="greeting">
        <p>Gallery</p>

        <button onClick={this.getData}></button>
      </div>
    );
  }
}
export default Gallery;
