import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "../components/Welcome";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Welcome} />
    </Switch>
  </Router>
);
