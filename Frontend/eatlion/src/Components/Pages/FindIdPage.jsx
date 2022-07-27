import React, { ChangeEvent, useEffect,useState } from "react";
import axios from "axios";
function FindIdPage(setToken){
    const [userphone,setUserPhone]=useState('');
    const isValidPhone =  userphone.length===11;
    const FindId=()=>{
if(!isValidPhone){
    alert('전화번호 11글자를 정확히 작성해주세요.');
}
else{
    alert("자깐만요!");
}
    /*else {
        const obj={
            user_phone:userphone
        }
        const res=await axios('/users/login/user-id/{phone-number}',{
            method:'POST',
            data:obj,
            headers:new Headers()
        })
      
      }
    }*/}
    const PhoneHandler = (e) => {
      setUserPhone(e.target.value);
    };
        return (
            <>
            <div className="page">
                <div className="titleWrap">
                   아이디 찾기
                </div>
                <div style={{fontSize:'16px',color:'#dadada'}}>전화번호를 통해 아이디를 찾을 수 있습니다</div>
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
    <div> <button  className="bottomButton" onClick={FindId}>
                   아이디 찾기
                </button></div>
    </div>
    </>
    );
}
export default FindIdPage;