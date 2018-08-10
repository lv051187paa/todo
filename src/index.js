import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

import { allReducers } from './reducers/index'

const middlewares = [];

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const initialState = {
  filter: 'SHOW_ALL',
  todoList: [
    {
      id: 1,
      title: "task1",
      editable: false,
      complited: false,
      visible: true
    },
    {
      id: 2,
      title: "task2",
      editable: false,
      complited: true,
      visible: true
    },
    {
      id: 3,
      title: "task3",
      editable: false,
      complited: false,
      visible: true
    }
  ]
};

const store = createStore(allReducers, initialState, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
