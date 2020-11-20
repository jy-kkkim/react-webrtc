import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import styles from './App.css'
import Home from "./views/Home"
import Room from "./views/Room"

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <Home />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/:room"
            render={props => (
              <React.Fragment>
                <Room />
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;