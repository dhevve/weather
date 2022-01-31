import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import { Provider } from "react-redux";

import store from "./store/store";
import MainWeather from "./components/MainWeather";

ReactDOM.render(
  <Provider store={store}>
    <MainWeather />
  </Provider>,
  document.getElementById("root")
);
