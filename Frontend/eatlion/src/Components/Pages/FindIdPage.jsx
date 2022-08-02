import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FindIdAPI from "../../API/FindIdAPI";
import axios from "axios";
function FindIdPage() {
  const[findid,setFindid]=useState("");
  const [userphone, setUserPhone] = useState("");
  const isValidPhone = userphone.length === 11;
  const navigate = useNavigate();
  const FindId = () => {
    if (!isValidPhone) {
      alert("전화번호 11글자를 정확히 작성해주세요.");
    } else {


      
      FindIdAPI(userphone).then(
        (response)=>{
            if(response !== ''){
          
                console.log(response);
                
                alert(`아이디 찾기 성공, 아이디는 ${setFindid}입니다.`);
                navigate('/login');
            }
            else{
                alert('아이디 찾기 실패');
            }
        }
      )  }
      };
    /*else {
        alert("자깐만요!");
    }*/
  
  const PhoneHandler = (e) => {
    setUserPhone(e.target.value);
  }; 


  return (
    <>
      <div className="page">
        <div className="titleWrap">아이디 찾기</div>
        <div className="subText">
          전화번호를 통해 아이디를 찾을 수 있습니다
        </div>
        <div className="contentWrap">
          <div className="inputTitle">전화번호</div>
        </div>
        <div className="inputWrap">
          <input
            type="text"
            className="input"
            placeholder=""
            value={userphone}
            onChange={PhoneHandler}
          />
        </div>
        <div>
          {" "}
          <button className="bottomButton" onClick={FindId}>
            아이디 찾기
          </button>
        </div>
      </div>
    </>
  );
}
export default FindIdPage;
