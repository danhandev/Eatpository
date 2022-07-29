import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import SignUpPage from "./Components/Pages/SignUpPage";
import ResetPwPage from "./Components/Pages/App";
import FindPwPage from "./Components/Pages/App";
import FindIdPage from "./Components/Pages/FindIdPage";
import App from "./Components/Pages/App";

const Router = ({ token, setToken }) => {
  return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage token={token} setToken={setToken}/>} />
        <Route path="/signup" element={<SignUpPage token={token} setToken={setToken} />} />
        <Route path="/resetpw" element={<ResetPwPage token={token} setToken={setToken}/>} />
        <Route path="/findpw" element={<FindPwPage token={token} setToken={setToken}/>} />
        <Route path="/findid" element={<FindIdPage token={token} setToken={setToken}/>} />
        <Route path="/*" element={<Navigate to="/" token={token} setToken={setToken}/>} />
      </Routes>
  );
};

export default Router;
