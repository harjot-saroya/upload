import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import mongoose from "mongoose";
import Img from "./img";
import * as serviceWorker from "./serviceWorker";
import Home from "./home.js";
import Upload from "./Upload.js";
import About from "./About.js";
const dbUrl = "mongodb://localhost:27017/test";
const connectDb = () => {
  return mongoose.connect(process.env.dbUrl);
};
const models = { Img };
export { connectDb };
export default models;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
ReactDOM.render(<App />, document.getElementById("root"));
//ReactDOM.render(<Home />, document.getElementById("root"));
//ReactDOM.render(<About />, document.getElementById("root"));
//ReactDOM.render(<Upload />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
