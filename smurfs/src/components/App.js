import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { getData } from "../actions/action";

import HomePage from "./HomePage";

const App = props => {
  return (
    <div className="App">
      <h2>
        This will have to be clicked after adding a smurf to display the new
        Smurf.
      </h2>
      <button onClick={props.getData}>Click to get tha Smurf's!</button>
      <HomePage />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getData })(App);
