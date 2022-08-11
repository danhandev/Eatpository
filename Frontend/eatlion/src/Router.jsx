import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import SignUpPage from "./Components/Pages/SignUpPage";
import ResetPwPage from "./Components/Pages/App";
import FindPwPage from "./Components/Pages/FindPwPage";
import FindIdPage from "./Components/Pages/FindIdPage";
import App from "./Components/Pages/App";
import MainPage from "./Components/Pages/MainPage";

const Router = ({token,setToken}) => {
   // const [token,setToken]=useState('');
  return (
      <Routes>
        <Route path="/" exact={true} element={<MainPage />} />
        <Route path="/login" exact element={<LoginPage token={token} setToken={setToken}/>} />
        <Route path="/signup" exact element={<SignUpPage token={token} setToken={setToken} />} />
        <Route path="/resetpw" exact element={<ResetPwPage token={token} setToken={setToken}/>} />
        <Route path="/findpw" exact element={<FindPwPage token={token} setToken={setToken}/>} />
        <Route path="/findid" exact element={<FindIdPage token={token} setToken={setToken}/>} />
      </Routes>
  );
};

export default Router;
