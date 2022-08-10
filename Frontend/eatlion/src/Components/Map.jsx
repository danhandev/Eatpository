// /* global kakao */
// import React, { useEffect } from 'react';

// const { kakao } = window;

// const Map = () => {

//     useEffect(() => {
//         const container = document.getElementById('myMap');
// 		const options = {
// 			center: new kakao.maps.LatLng(37.55036,126.92544),
// 			level: 3
// 		};
//         const map = new kakao.maps.Map(container, options);
//     }, []);

//     return (
//         <div id='myMap' style={{
//             width: '100vw',
//             height: '100vh'
//         }}></div>
//     );
// }

// export default Map;

// ======== 2022-08-09

/* global kakao */
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../Css/Maps.css";
import ListAPI from "../API/ListAPI";
const { kakao } = window;

const Map = () => {
  const location = useLocation();
  let storeList = location.state.response;
  let makers = [];

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
    <li key={idx}>{store}</li>;
    //console.log("store :", store);
    return (
      
       <div className="listsection" key={store.id}>
        <div  className="store_name">{store.store_name} </div>
        <div className="main_menu">{store.main_menu}</div>
        </div>
    );
  });
  console.log(listitems);

  //document.getElementById('table').appenchild();

  const setList = () => {};
  const number = 1;
  //const number = location.state.store.length;

  return (
    <div>
      <div className="wrapper">
        <div className="sectionFirst">
          <p>원하는 에디터를 선택해주세요</p>
          <div className="cardsSection">
            <div className="card">표</div>
            <div className="card">큐</div>
            <div className="card">란</div>
            <div className="card">송</div>
          </div>
        </div>
        <div className="sectionSecond">
          <p>원하는 음식 종류를 선택해주세요</p>
          <div className="cardsSection">
            <div className="card">한식</div>
            <div className="card">일식</div>
            <div className="card">양식</div>
            <div className="card">중식</div>
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
          <button onClick={setList} className="random">
            랜덤으로 맛집을 추천받아볼까요?
          </button>
        </div>
      </div>
      <div
        id="map"
        style={{
          width: "100vw",
          height: "calc(100vh - 56px)",
        }}
      ></div>
    </div>
  );
};

export default Map;
