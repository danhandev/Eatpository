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
  let storeList = JSON.parse(sessionStorage.getItem('result'));

  return (
   
    // storeList를 가진 경우, 멋사먹자 로고 클릭 시 start화면이 아닌 main으로 넘어가게 하였음
    <Routes>
      {storeList !== null && (
        <Route path="/" exact={true} element={<MainPage />} />
      )}
      <Route
        path="/"
        exact={true}
        element={<StartPage token={token} setToken={setToken} />}
      />
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
