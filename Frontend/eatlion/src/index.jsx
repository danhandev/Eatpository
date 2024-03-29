import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import "./Css/index.css" 
import App from './Components/Pages/App';

axios.defaults.withCredentials = true;

ReactDOM.render(

    <BrowserRouter>
     <App />
    </BrowserRouter>,
  document.getElementById("root")
);