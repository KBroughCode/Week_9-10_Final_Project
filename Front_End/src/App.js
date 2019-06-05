import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import React from "react";
import Navbar from "./App/Components/NavBar";
import "./App/Components/navbar.css"

import BlackJack from "./BlackJack/BlackJack";
import Snap from "./Snap/Snap";
import OldMaid from "./OldMaid/OldMaid";
import Main from "./App/Components/main";

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
              <Route path="/Snap" component={Snap} />
              <Route path="/OldMaid" component={OldMaid} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  };
};

export default App;
