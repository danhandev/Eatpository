import React, { useRef, useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import "../../Css/Start.css";
import editor1 from "../../Img/editor1.png";
import editor2 from "../../Img/editor2.png";
import editor3 from "../../Img/editor3.png";
import editor4 from "../../Img/editor4.png";
import axios from "axios";
import ListAPI from "../../API/ListAPI";
function StartPage() {
  let table = [false, false, false, false];
  const [firstButton, setFirstbutton] = useState(table[0]);
  const [secondButton, setSecondbutton] = useState(table[1]);
  const [thirdButton, setThirdbutton] = useState(table[2]);
  const [fourthButton, setFourthbutton] = useState(table[3]);
  const navigate = useNavigate();

  const FirstHandler = (e) => {
    //table[0] = !table[0];
    setFirstbutton((current) => !current);
    let id = e.target.id;
    document.getElementById(id).classList.toggle("clicked");
  };
  const SecondHandler = (e) => {
    setSecondbutton((current) => !current);
    let id = e.target.id;
    document.getElementById(id).classList.toggle("clicked");
  };
  const ThirdHandler = (e) => {
    setThirdbutton((current) => !current);
    let id = e.target.id;
    document.getElementById(id).classList.toggle("clicked");
  };
  const FourthHandler = (e) => {
    setFourthbutton((current) => !current);
    let id = e.target.id;
    document.getElementById(id).classList.toggle("clicked");
  };

  //0000에 대한 코드 수정, 에디터 선택 안해도 넘어가게?
  const handleSubmit = async (resultnum, categorynum) => {
    let result = [0, 0, 0, 0];
    categorynum = "1111";
    result[0] += Number(firstButton);
    result[1] += Number(secondButton);
    result[2] += Number(thirdButton);
    result[3] += Number(fourthButton);
    resultnum = result.join("");
    categorynum = Number(categorynum);
    ListAPI(resultnum, categorynum).then((response) => {
      //navigate('/main',{state:{response}});
      sessionStorage.setItem("listkey", JSON.stringify(resultnum));
      sessionStorage.setItem("categorykey", JSON.stringify(categorynum));
      navigate("/main", { state: { response } });
    });
  };
  //   await axios
  //     .get(
  //       "http://localhost:8000/stores/selected/",
  //       {
  //         params: { editor: resultnum, category: parseInt(categorynum) },
  //       },
  //       {
  //         withCredentials: true,
  //       }
  //     )
  //     .then((response) => {
  //       store = response.data.stores;
  //       navigate('/',
  //         {state:{store}});
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  //   return store;
  // };

  return (
    <div className="start page">
      <div className="titleWrap">
        멋사먹자는 <br />
        6명의 홍대생 에디터가 선정한 홍대 맛집을 소개하는 서비스 입니다.
      </div>
      <div className="subText">
        홍대생 에디터가 선정한 맛집 리스트를 확인하고, 가고 싶은 식당을 선택해
        보세요! <br />뭘 먹을지 못 정하겠다고요? 랜덤 추천 기능을 이용해보세요!
        랜덤으로 식당 한 곳을 추천해드립니다!
      </div>
      <h1>👇원하는 에디터를 선택해주세요!👇</h1>
      <div className="btnSection">
        <button onClick={FirstHandler} className="editor" id="1">
        
            '송'의
            <br />
            혼밥 맛집
      
        </button>
        <button onClick={SecondHandler} className="editor" id="2">
      
            '큐'의 <br />
            회식 맛집
       
        </button>
        <button onClick={ThirdHandler} className="editor" id="3">
         
            '란'의
            <br /> 데이트 맛집
       
        </button>
        <button onClick={FourthHandler} className="editor" id="4">
        
            '표'의 <br />
            포장 맛집
         
        </button>
        {/* <button onClick={handleEditor_5} className="editor 5">
          국밥든든해
        </button>
        <button onClick={handleEditor_6} className="editor 6">
          양식중
        </button> */}
      </div>
      <div>
        <button onClick={handleSubmit} className="submitButton">
          에디터 선택 완료
        </button>
      </div>
    </div>
  );
}

export default StartPage;
