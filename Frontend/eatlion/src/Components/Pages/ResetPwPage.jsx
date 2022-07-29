import React, { ChangeEvent, useEffect,useState } from "react";
import axios from "axios";
function RenamePwPage(setToken){
    const [password, setPassword] = useState('');
    const [passwordToConfirm, setPasswordToConfirm] = useState('');
    const isValidPassword  = password.length  >= 8;
    const RenamePw=()=>{
if(!isValidPassword){
    alert('비밀번호는 8글자 이상으로 설정하십시오.');
}
else if(password !== passwordToConfirm) {
    alert('비밀번호와 비밀번호 확인이 다릅니다.');
  }
else{
    alert("자깐만요!");
}
}
    const passwordHandler = (e)=>{
        setPassword(e.currentTarget.value);
      };
      const passwordToConfirmHandler = (e) => {
        setPasswordToConfirm(e.currentTarget.value);
      };

        return (
            <>
            <div className="page">
                <div className="titleWrap">
                   비밀번호 재설정
                </div>
                <div style={{fontSize:'16px',color:'#dadada'}}>8자리 이상으로 비밀번호를 재설정해주세요.</div>
                <div className="contentWrap">
                    <div className="inputTitle" >비밀번호</div>
                    </div> 
    <div className="inputWrap">
        <input
        type='text'
        className="input" 
        placeholder=""
        value={password} onChange={passwordHandler}/>
    </div>
    <div className="contentWrap">
                    <div className="inputTitle" >비밀번호 확인</div>
                    </div> 
    <div className="inputWrap">
        <input
        type='text'
        className="input" 
        placeholder=""
        value={passwordToConfirm} onChange={passwordToConfirmHandler}/>
    </div>
    <div> <button  className="bottomButton" onClick={RenamePw}>
                   비밀번호 재설정
                </button></div>
    </div>
    </>
    );
}
export default RenamePwPage;