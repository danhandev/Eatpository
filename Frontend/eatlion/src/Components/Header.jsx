import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";
import "../Css/Header.css";
import logo from "../Img/logo.png";
import axios from "axios";

// if (access_token!==null){
//   axios({
//     method: "post",
//     url: "http://127.0.0.1:8000/users/logincheck/",
//     headers: {
//       Authorization: `Bearer ${access_token}`,
//     },
//   })
//     .then((res) => {
//       if(res.data.message=="success"){
//         setToken("True");
//       }
//     })

// }

// 앱 메인에서 Login 상태를 prop으로 받아와서 state에 따라 Logout버튼을 보여주거나 보여주지 않는다.

const Header = ({ token, setToken }) => {
  let is_alert = false;
  let access_token = "";
  let refresh_token = "";
  try {
    access_token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("access_token"))
      .split("=")[1];
    refresh_token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("refresh_token"))
      .split("=")[1];
  } catch (e) {
    console.log("no access_token");
    console.log(e);
  }

  console.log(access_token);

  if (1) {
    axios({
      method: "post",
      url: "http://15.165.226.61:3000/users/logincheck/",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }).then((res) => {
      if (res.data.message === "success") {
        setToken("True");
      } else if (res.data.message === "refresh_token needed") {
        try {
          refresh_token = document.cookie
            .split("; ")
            .find((row) => row.startsWith("refresh_token"))
            .split("=")[1];
        } catch (e) {
          console.log("no access_token");
          console.log(e);
        }
        console.log(`refresh_token : ${refresh_token}`);
        axios({
          method: "post",
          url: "http://15.165.226.61:3000/users/loginValidate/",
          headers: {
            Authorization: `Bearer ${refresh_token}`,
          },
        }).then((res) => {
          if (res.data.message === "loginAgain") {
            is_alert = true;
            console.log("로그인이 만료되었습니다");
            setToken(false);
            setLogged(false);
          } else if (res.data.message === "access_token_update") {
            access_token = res.data.access_token;

            document.cookie = `access_token=${access_token}; max-age=10`;
            setLogged(true);
            setToken("True");
          } else if (res.data.message === "noAccess") {
            console.log("no access token");
          }
        });
      }
    });
  }

  const [isLoggedIn, setLogged] = useState(false);
  useEffect(() => {
    if (token === "") {
      setLogged(false);
    } else if (token !== "") {
      setLogged(true);
    }
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
          {isLoggedIn === false && (
            <div className="notLoggedIn">
              <Link to="/login" className="login Button">
                로그인
              </Link>
              <Link to="/signup" className="join Button ">
                회원가입
              </Link>
            </div>
          )}
          {isLoggedIn === true && (
            <Link
              to="/start"
              onClick={() => {
                document.cookie = `access_token=${access_token}; max-age=0`;
                document.cookie = `refresh_token=${refresh_token}; max-age=0`;
                console.log(document.cookie);
                setLogged(false);
                setToken("");
              }}
              className="Button"
            >
              로그아웃
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
