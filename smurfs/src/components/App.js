import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import SmurfList from "./SmurfList";
import SmurfForm from "./CreateSmurfForm";
import Profile from "./Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App(props) {
  useEffect(() => {
    props.getSmurfs();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <Profile />
        </Route>
        <Route path="/">
          <SmurfForm />
          <SmurfList />
        </Route>
      </Switch>
    </Router>
  );
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, { getSmurfs })(App);