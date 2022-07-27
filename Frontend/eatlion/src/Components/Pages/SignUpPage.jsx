import React, { useState } from "react";
import SignUpAPI from "../../API/SignUpAPI";

function SignUpPage(setToken) {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [userphone, setUserPhone] = useState("");
  const [passwordToConfirm, setPasswordToConfirm] = useState("");
  const isValidPhone = userphone.length === 11;
  const isValidPassword = password.length >= 8;
  // 회원가입 버튼 클릭
  const signUp = () => {
    // signUpAPI 실행
    // input: userid, password, username, email
    // return: 성공 시, Token 값(문자열), 실패 시, ''
    if (password !== passwordToConfirm) {
      alert("비밀번호와 비밀번호 확인이 다릅니다.");
    } else if (userid === "") {
      alert("아이디는 필수항목입니다.");
    } else if (password === "") {
      alert("비밀번호는 필수항목입니다.");
    } else if (passwordToConfirm === "") {
      alert("비밀번호 확인은 필수항목입니다.");
    } else if (userphone === "") {
      alert("전화번호는 필수항목입니다.");
    } else if (!isValidPhone) {
      alert("전화번호 11글자를 정확히 작성해주세요.");
    } else if (!isValidPassword) {
      alert("비밀번호는 8글자 이상으로 설정하십시오.");
    } else {
      SignUpAPI(userid, userphone, password).then((response) => {
        if (response !== "") {
          console.log(response)
          setToken(response);
          alert("회원가입 성공!!!");

          setUserid("");
          setPassword("");
          setPasswordToConfirm("");
          setUserPhone("");
          
        } else {
          console.log(response)
          alert(
            "회원가입 실패!!! - 원인으로는 서버 문제 or 아이디 중복 등의 원인이 있을 수 있습니다."
          );
        }
      });
    }
  };

  const useridHandler = (e) => {
    setUserid(e.currentTarget.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const PhoneHandler = (e) => {
    setUserPhone(e.target.value);
  };
  const passwordToConfirmHandler = (e) => {
    setPasswordToConfirm(e.currentTarget.value);
  };

  return (
    <div className="page">
      <div className="joinMain fullsize">
        {" "}
        <h1>멋사먹자 회원가입</h1>
        <div className="subText">
          서비스 가입을 하면 멋사먹자의 이용약관, 개인정보취급방침 및 개인정보
          3자 제공에 동의하게 됩니다.
          <br /> 이미 계정이 있는 경우 로그인하여 주세요
        </div>
        <div className="contentWrap">
          <div className="inputTitle">
            {" "}
            전화번호{" "}
            <div className="inputWrap">
              <input
                type="text"
                className="input"
                placeholder="xxx-xxxx-xxxx"
                value={userphone}
                onChange={PhoneHandler}
              />{" "}
            </div>
          </div>
          <div className="inputTitle">
            아이디{" "}
            <div className="inputWrap">
              <input
                type="text"
                className="input"
                placeholder="id"
                value={userid}
                onChange={useridHandler}
              />{" "}
            </div>
          </div>
          <div className="inputTitle">
            {" "}
            비밀번호
            <div className="subText">
              영문,숫자,특수문자 포함 8자 이상을 입력해주세요.
            </div>
            <div className="inputWrap">
              <input
                type="password"
                className="input"
                placeholder="password"
                value={password}
                onChange={passwordHandler}
              />
            </div>
          </div>
          <div className="inputTitle">
            {" "}
            비밀번호확인
            <div className="subText">
              *입력하신 비밀번호를 다시 입력해주세요.
            </div>
            <div className="inputWrap">
              <input
                type="password"
                className="input"
                placeholder="passwordvalidation"
                value={passwordToConfirm}
                onChange={passwordToConfirmHandler}
              />
            </div>
          </div>
          <div>
            {" "}
            <button className="bottomButton" onClick={signUp}>
              가입하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUpPage;
