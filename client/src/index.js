// importing the libraries
import materializeCSS from "materialize-css/dist/css/materialize.min.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

// creating the redux store
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// provider helps the child components to get the state from the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
