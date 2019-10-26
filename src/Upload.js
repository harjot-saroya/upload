import React, { Component } from "react";
import axios from "axios";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = { image: "", data: [], id: 0, message: null };
  }
  putDataToDb = message => {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios
      .post("http://localhost:3000/putData", message)
      .then(res => console.log(res.data));
  };
  handleEvent = e => {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    // connect mongo here
    reader.onload = e => {
      const message = e.target.result;
      this.putDataToDb(message);
      console.warn("img data", e.target.result);
    };
  };

  render() {
    return (
      <div class="greeting">
        <p>Upload here</p>
        <div class="s">
          <input
            type="file"
            class="x"
            name="file"
            onChange={e => this.handleEvent(e)}
          />
        </div>
      </div>
    );
  }
}

export default Upload;
