import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import SignUpPage from "./Components/Pages/SignUpPage";
import ResetPwPage from "./Components/Pages/ResetPwPage";
import FindPwPage from "./Components/Pages/FindPwPage";
import FindIdPage from "./Components/Pages/FindIdPage";
import StartPage from "./Components/Pages/StartPage";
import MainPage from "./Components/Pages/MainPage";

const Router = ({ token, setToken }) => {
  // const [token,setToken]=useState('');
  return (
    <Routes>
      {/* {
         <Route path="/start" exact={true} element={<StartPage />} />}
      {
        (token) && <Route path="/" exact={true} element={<StartPage />} />
      } */}
      <Route path="/" exact={true} element={<StartPage token={token} setToken={setToken} />} />
      <Route
        path="/main"
        exact
        element={<MainPage token={token} setToken={setToken} />}
      />
      <Route
        path="/login"
        exact
        element={<LoginPage token={token} setToken={setToken} />}
      />
      <Route
        path="/signup"
        exact
        element={<SignUpPage token={token} setToken={setToken} />}
      />
      <Route
        path="/resetpw"
        exact
        element={<ResetPwPage token={token} setToken={setToken} />}
      />
      <Route
        path="/findpw"
        exact
        element={<FindPwPage token={token} setToken={setToken} />}
      />
      <Route
        path="/findid"
        exact
        element={<FindIdPage token={token} setToken={setToken} />}
      />
      <Route
        path="/start"
        exact
        element={<StartPage token={token} setToken={setToken} />}
      />
    </Routes>
  );
};

export default Router;
