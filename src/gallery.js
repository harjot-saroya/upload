import React, { Component } from "react";
import axios from "axios";
class Gallery extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    //disp: "5deac5e9125e18807dc705d4",
    url: "",
    links: null,
    urlList: null
  };
  getPhotoData = async data => {
    let res = await axios
      .get(`http://localhost:3000/getData/${data}`)
      .then(res => console.log(res.config.url));
    if (res) {
      let url = res.config.url;
      this.setState({ url: url });
    }
  };

  async printData() {
    let res = await axios.get(`http://localhost:3000/getData`).then(res => res);
    if (res) {
      //console.log(res);
      this.setState({ links: res.data, urlList: res.config.url });
    }
  }

  render() {
    return (
      <div className="greeting">
        <p>Gallery</p>
        <button
          id="button"
          onClick={() => {
            document.getElementById("button").style.visibility = "hidden";
            this.printData();
          }}
        >
          Click to bring up database items
        </button>
        <div>
          <ul style={{ marginLeft: "20%", display: "flex", flexWrap: "wrap" }}>
            {/* Ternary if: (if this) ? then this : otherwise this */}
            {this.state.links
              ? this.state.links.map(item => (
                  <a href={`http://localhost:3000/getData/${item}`}>{item}</a>
                ))
              : null}
          </ul>
        </div>
      </div>
    );
  }
}
export default Gallery;
