import React, {  useEffect,useState } from "react";
import {Link,useNavigate}from "react-router-dom";
import LogInAPI from "../../API/LoginAPI";


function LoginPage() {
    const[token,setToken]=useState('');
    const [userid,setUserid]=useState('');
    const[password,setPassword]=useState('');
    const [idValid,setIdValid]=useState(true);
    const [pwValid,setPwValid]=useState(true);
    const [notAllow, setNotAllow] = useState(true);
    const navigate=useNavigate();


    useEffect(() => {
        if(idValid && pwValid) {
          setNotAllow(false);
          return;
        }
        setNotAllow(true);
      }, [idValid, pwValid]);



    const handleID=(e)=>{
        setUserid(e.currentTarget.value);
        
    };
    const handlePw=(e)=>{
        setPassword(e.currentTarget.value);
      
    };

    const onClickConfirmButton = () => { 
        LogInAPI(userid,password).then(
            (response)=>{
                if(response!==''){
                    alert("로그인 성공");
                    setUserid('');
                    setPassword('');
                    setToken(response);
                    navigate('/findid');
                }
                else{
                    alert('로그인 실패');
                    setUserid('');
                    setPassword('');
                }
            }
        )
    };
    const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
  if(token === ''){
      console.log('로그인 후 사용가능합니다.');
  }
  else{
      setIsLogin(true);
      console.log('로그인 상태');
  }
    }, [token]);

 
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
export default LoginPage;