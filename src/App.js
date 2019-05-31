import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import React from "react";
import Navbar from "./NavBar";
import "./navbar.css"

import BlackJack from "./BlackJack/BlackJack";
import Main from "./main";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="app">
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/BlackJack" component={BlackJack} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}
export default App;
