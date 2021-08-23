import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import { connect } from "react-redux";
import * as actions from "../actions";

import Landing from "./Landing";

// dummy components
const Dashboard = () => <div>Dashboard</div>;
const SurveyNew = () => <div>SurveyNew</div>;

class App extends Component {
  // render one time after the component is loaded
  componentDidMount() {
    this.props.fetchUser();
  }

  // using react router for handling routes
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Landing} />
            <Route path="/surveys" exact component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
