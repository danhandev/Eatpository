import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import SignUpPage from "./signUp";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

  return (
    <div className="navSection">
      <nav className="nav">
        <div className="nav-logo">
          <Link to="/App"></Link>
        </div>
        <div className="navSignIn">
          <Link to="/SignUp" className="SingInButton">
            회원가입
          </Link>
        </div>
        <div className="navLogIn">
          <Link to="/Login" className="LogInButton">
            로그인
          </Link>
        </div>
        <div>{isLoggedIn && <button className="navLogOut"></button>}</div>
      </nav>
    </div>
  );
};

export default NavBar;
