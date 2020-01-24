import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import reducer from './reducers/reducer';

//REDUX
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
//ASYNC REDUX
import thunk from "redux-thunk";
import logger from "redux-logger"

const store = createStore(reducer, applyMiddleware(thunk, logger));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
   