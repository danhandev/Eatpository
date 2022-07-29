import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import "./Css/index.css" 
import Header from "./Components/Header";
import Router from "./Router";

axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);