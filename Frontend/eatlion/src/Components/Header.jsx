import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Css/Header.css";
import logo from "../Img/logo.png";

// 앱 메인에서 Login 상태를 prop으로 받아와서 state에 따라 Logout버튼을 보여주거나 보여주지 않는다.
const Header = () => {
  const [token, setToken] = useState("");
  const [isLoggedIn, setLogged] = useState(false);
  useEffect(() => {
    (token !== "") && (setLogged(true));
  }, [token]);
  console.log(JSON.stringify(token));
  console.log(isLoggedIn);
  return (
    <div className="navSection">
      <nav className="nav">
        <div className="nav-logo">
          <Link to="/main">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="nav-btns">
          {!isLoggedIn &&
            <div className="notLoggedIn">
              <Link to="/login" className="Button">
                로그인
              </Link>
              <Link to="/signup" className="Button">
                회원가입
              </Link>
            </div>}
          {isLoggedIn&&
            <Link
              to="/login"
              onClick={() => {
                setLogged(false);
                setToken("");
              }}
              className="Button"
            >
              로그아웃
            </Link>}
          
        </div>
      </nav>
    </div>
  );
};

export default Header;
