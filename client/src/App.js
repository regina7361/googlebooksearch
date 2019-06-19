import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Home/Navbar";
import Home from "./components/Home";
import Saved from "./components/Saved";
import NotFound from "./components/NotFound";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={Saved} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;

