import React, { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import SignUpPage from "./signUp";


// 앱 메인에서 Login 상태를 prop으로 받아와서 state에 따라 Logout버튼을 보여주거나 보여주지 않는다.
const NavBar = (props) => {
  const isLoggedIn = props.isLoggedIn;

  const onLogOut = () => {
    // user_id 객체 가진거 있으면 삭제
    sessionStorage.removeItem("user_id");
    //새로고침
    document.location.href = "/";
  };

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

        <div>
          {isLoggedIn ? (
            <button onClick={onLogOut} className="navLogOut"></button>
          ) : (
            <div className="navLogIn">
              <Link to="/Login" className="LogInButton">
                로그인
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;