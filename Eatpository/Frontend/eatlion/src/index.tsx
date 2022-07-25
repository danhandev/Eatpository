import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import "./index.css";
import "./Components/NavBar.css";
axios.defaults.baseURL = "https://www.abc.com";
axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
