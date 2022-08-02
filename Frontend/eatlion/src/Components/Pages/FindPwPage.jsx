import React, { ChangeEvent, useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FindPwAPI from "../../API/FindPwAPI";
function FindPwPage(setToken){
    const [userid, setUserid] = useState('');
    const [userphone,setUserPhone]=useState('');
    const navigate = useNavigate();
    const isValidPhone =  userphone.length===11;
    const FindPw=()=>{
if(!isValidPhone){
    alert('전화번호 11글자를 정확히 작성해주세요.');
}
else if (userid === ''){
    alert('아이디는 필수항목입니다.');
  }
else {
    FindPwAPI(userid,userphone).then(
      (response)=>{
          if(response){
              console.log(response);
              alert(`비밀번호는 ${response}입니다. 까먹지 마세요~`);
              navigate('/login');
          }
          else{
              alert('비밀번호 찾기 실패');
          }
      }
    )  
  }
}
    const UseridHandler = (e)=>{
        setUserid(e.currentTarget.value);
      };
    const PhoneHandler = (e) => {
      setUserPhone(e.target.value);
    };

        return (
            <>
            <div className="page">
                <div className="titleWrap">
                   비밀번호 찾기
                </div>
                <div className="subText">전화번호와 아이디를 통해 비밀번호를 찾을 수 잇습니다</div>
                <div className="contentWrap">
                    <div className="inputTitle" >전화번호</div>
                    </div> 
    <div className="inputWrap">
        <input
        type='text'
        className="input" 
        placeholder=""
        value={userphone} onChange={PhoneHandler}/>
    </div>
    <div className="contentWrap">
                    <div className="inputTitle" >아이디</div>
                    </div> 
    <div className="inputWrap">
        <input
        type='text'
        className="input" 
        placeholder=""
        value={userid} onChange={UseridHandler}/>
    </div>
    <div> <button  className="bottomButton" onClick={FindPw}>
                   비밀번호 찾기
                </button></div>
    </div>
    </>
    );
}
export default FindPwPage;