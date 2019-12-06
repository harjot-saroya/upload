import React, { Component } from "react";
import axios from "axios";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = { image: "", data: [], id: 0, message: null };
  }

  state = {
    selectedFile: null
  };
  putDataToDb = message => {
    const fd = new FormData();
    fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
    console.log(fd);
    axios
      .post("http://localhost:3000/putData", fd, {
        onUploadProgress: progressEvent => {
          console.log(
            "Upload Progress: " +
              (progressEvent.loaded / progressEvent.total) * 100
          );
        }
      })
      .then(res => console.log(res));
  };

  handleEvent = e => {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    // connect mongo here
    reader.onload = e => {
      const message = e.target.result;
      this.putDataToDb(reader);
    };
    this.setState({
      selectedFile: files[0]
    });
  };

  render() {
    return (
      <div class="greeting">
        <p>Upload here</p>
        <div class="s">
          <input
            type="file"
            class="x"
            name="myFile"
            enctype="multipart/form-data"
            method="POST"
            onChange={this.handleEvent}
          />
        </div>
      </div>
    );
  }
}

export default Upload;
