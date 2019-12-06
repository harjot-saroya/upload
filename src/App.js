import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./About";
import Upload from "./Upload";
import Gallery from "./gallery";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div class="top">
            <h1>Upload.com</h1>
          </div>

          <div class="sidebar">
            <ul>
              <Link to="/">Home</Link>
            </ul>
            <ul>
              <Link to="/upload/">Upload</Link>
            </ul>
            <ul>
              <Link to="/about/">About us</Link>
            </ul>
            <ul>
              <Link to="/gallery/">Gallery</Link>
            </ul>
          </div>
          <div class="content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about/" component={About} />
              <Route path="/upload/" component={Upload} />
              <Route path="/gallery/" component={Gallery} />
            </Switch>
          </div>
          <div class="foot"></div>
        </div>
      </Router>
    );
  }
}

export default App;
