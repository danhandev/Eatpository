/* global kakao */
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../Css/Maps.css";
import ListAPI from "../API/ListAPI";
const { kakao } = window;
const Map = () => {
  const location = useLocation();
  let storeList = JSON.parse(sessionStorage.getItem('result')); 
  // let result = location.state.resultnum + 1111;
  // result = result.split(); 
  // console.log(result); 
  let makers = [];

  const editorHandler = (e) => {
    let id = e.target.id;
    // result[id] = !result[id];
    // document.getElementById(id).classList.toggle("clicked");
    // console.log('handler clicked, ', result);
  }

  // 지도를 생성합니다
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.55036, 126.92544),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    const center = map.getCenter();
  }, [storeList]);

  //검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
  let infoWindow = new kakao.maps.InfoWindow({ zIndex: 1 });
  // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
  // 인포윈도우에 장소명을 표시합니다
  function displayInfowindow(marker, title) {
    var content = '<div style="padding:5px;z-index:1;">' + title + "</div>";

    infoWindow.setContent(content);
    //infoWindow.open(map, marker);
  }

  const listitems = storeList.map((store, idx) => {
    //console.log("store :", store);
    return (
      <div className="lists" key={store.id}>
        <div className="store_name">{store.store_name} </div>
        <div className="main_menu">{store.main_menu}</div>
      </div>
    );
  }); 


  const setList = () => {};
  const number = storeList.length;

  return (
    <div>
      <div className="wrapper">
        <div className="sectionFirst">
          <p>원하는 에디터를 선택해주세요</p>
          <div className="cardsSection">
            <button onClick={editorHandler} className="card" id="0">송</button>
            <button onClick={editorHandler} className="card" id="1">큐</button>
            <button onClick={editorHandler} className="card" id="2">란</button>
            <button onClick={editorHandler} className="card" id="3">표</button>
          </div>
        </div>
        <div className="sectionSecond">
          <p>원하는 음식 종류를 선택해주세요</p>
          <div className="cardsSection">
            <button onClick={editorHandler} className="card" id="4">한식</button>
            <button onClick={editorHandler} className="card" id="5">일식</button>
            <button onClick={editorHandler} className="card" id="6">양식</button>
            <button onClick={editorHandler} className="card" id="7">중식</button>
          </div>
        </div>
        <div className="sectionThird">
          <p>
            지금 위치에서 가까운
            <br />
            {number}개의 먹킷리스트에요
          </p>
          <div className="title">
            <div className="subtext">상호명</div>
            <div className="subtext">대표메뉴</div>
          </div>
          <div className="listSection" id="table">
            {listitems}
          </div>
        </div>
        <div className="sectionForth">
          <button onClick={setList} className="randomButton">
            랜덤으로 맛집을 추천받아볼까요?
          </button>
        </div>
      </div>
      <div
        id="map"
        style={{
          width: "100vw",
          height: "calc(100vh - 48px)",
        }}
      ></div>
    </div>
  );
};

export default Map;
