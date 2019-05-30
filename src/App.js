import { BrowserRouter as Router, Route } from "react-router-dom";
import { Component } from "react";
import React from "react";
import Navbar from "./NavBar";
import "./navbar.css";
import BlackJack from "./BlackJack/BlackJack";
import Main from "./main";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={Main} />
          <Route path="/BlackJack" component={BlackJack} />
        </React.Fragment>
      </Router>
    );
  }
}
export default App;
