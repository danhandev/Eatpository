import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Css/Header.css";
import logo from "../Img/logo.png";

// 앱 메인에서 Login 상태를 prop으로 받아와서 state에 따라 Logout버튼을 보여주거나 보여주지 않는다.
const Header = ({token,setToken}) => {
  
  const [isLoggedIn, setLogged] = useState(false);
  useEffect(() => {
   if(token===''){
    setLogged(false);
   }else if(token!==''){setLogged(true);}
  }, [token]);

  return (
    <div className="navSection">
      <nav className="nav">
        <div className="nav-logo">
          <Link to="/">
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
