import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "./App";
import Login from "./Components/Login";
import SignUpPage from "./Components/signUp";
import Navigation from "./Components/Navigation";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/App/*" element={<App />}></Route>
          <Route path="/Login/*" element={<Login />}></Route>
          <Route path="/SignUpPage/*" element={<SignUpPage />}></Route>
          <Route path="/" element={<Navigate replace to="/App" />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
