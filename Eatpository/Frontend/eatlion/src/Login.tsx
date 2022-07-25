import React, { ChangeEvent, useEffect,useState } from "react";
//import {Link,useNavigate}from "react-router-dom";
import LogInAPI from "./API/LogInAPI";


function Login(token:any,setToken:any) {

    const [userid,setUserid]=useState('');
    const[password,setPassword]=useState('');
    const [idValid,setIdValid]=useState(false);
    const [pwValid,setPwValid]=useState(false);
    const [notAllow, setNotAllow] = useState(true);
    //const navigate=useNavigate();


    useEffect(() => {
        if(idValid && pwValid) {
          setNotAllow(false);
          return;
        }
        setNotAllow(true);
      }, [idValid, pwValid]);



    const handleID=(event:ChangeEvent<HTMLInputElement>)=>{
        setUserid(event.currentTarget.value);
        const regex=
        /^[a-z]+[a-z0-9]{5,19}$/g;//아이디 정규표현식
        if(regex.test(userid)){
            setIdValid(true);
        }else{
            setIdValid(false);
        }
    };
    const handlePw=(event:ChangeEvent<HTMLInputElement>)=>{
        setPassword(event.currentTarget.value);
        const regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if(regExp.test(password)){
            setPwValid(true);
        }else{
            setPwValid(false);
        }
    };

    const onClickConfirmButton = () => { 
        LogInAPI(userid,password).then(
            (response)=>{
                if(response!==''){
                    setToken(response);
                    setUserid('');
                    setPassword('');
                }
                else{
                    alert('로그인 실패');
                    setUserid('');
                    setPassword('');
                }
            }
        )
    };
 
 return (
        <div className="page">
            <div className="titleWrap">
               멋사먹자 로그인
            </div>
            <div className="contentWrap">
                <div className="inputTitle" >아이디</div>
<div className="inputWrap">
    <input
    type='text'
    className="input" 
    placeholder="testid"
    value={userid} onChange={handleID}/>
</div>
<div className="errorMessageWrap">
    {
        !idValid&&userid.length>0 &&(
            <div>올바른 아이디를 입력해주세요.</div>
        )
    }
</div>

                <div style={{marginTop:"26px"}}className="inputTitle" >비밀번호</div>
                <div className="inputWrap">
    <input type='password'className="input"placeholder="영문,숫자,특수문자 포함 8자 이상" value={password} onChange={handlePw}/>
</div>
<div className="errorMessageWrap">
{
        !pwValid&&password.length>0 &&(
            <div>영문,숫자,특수문자 포함 8자 이상을 입력해주세요.</div>
        )   }

            </div>
            <div>
                <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">
                    로그인
                </button>
            </div>
</div>
        </div>
        );
        
}
export default Login;