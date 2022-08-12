/* global kakao */
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../Css/Maps.css";
import ListAPI from "../API/ListAPI";
import { useState } from 'react';
import axios from "axios";
const { kakao } = window;
const Map = () => {
  const location = useLocation();
  const [Editorlist,setEditorList]=useState(1111);
  let storeList = JSON.parse(sessionStorage.getItem('result')); 
  let editorlist = JSON.parse(sessionStorage.getItem('listkey')); 
  let categoryList= JSON.parse(sessionStorage.getItem('categorykey')); 
  let result=editorlist+categoryList;
  result=[...result]
 result[0]=Number(result[0]);
 result[1]=Number(result[1]);
 result[2]=Number(result[2]);
 result[3]=Number(result[3]);
 result[4]=Number(result[4]);
 result[5]=Number(result[5]);
 result[6]=Number(result[6]);
 result[7]=Number(result[7]);

  // let result=[0,0,0,0,1,1,1,1,]
  // result[0]=(editorlist[0]);
  // result[1]=(editorlist[1]);
  // result[2]=(editorlist[2]);
  // result[3]=(editorlist[3]);
  
  console.log(result)
  let makers = [];

  const editorHandler = (e) => {
    let id = e.target.id;
    (result[id]) = (!result[id])*1;
    console.log(result[id])
    document.getElementById(id).classList.toggle("clicked");
    console.log('handler clicked, ', result);
    let editornum=result.slice(0,4);
    editornum=editornum.join('');
    let categorynum=result.slice(4,8);
    categorynum=categorynum.join('');
    ListAPI(editornum,categorynum).then((response)=>{
      sessionStorage.setItem('listkey',JSON.stringify(editornum)); 
      sessionStorage.setItem('categorykey',JSON.stringify(categorynum)); 
    })
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
    for(let i=0;i<8;i++){
      if (result[i]===1){
        document.getElementById(i).classList.toggle("clicked");

      }
    }
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 

    console.log(storeList);
    console.log(storeList[0]);
    for (var i=0;i<storeList.length;i++){
      var markerpos = new kakao.maps.LatLng(storeList[i].latitude, storeList[i].longitude);
      var marker = new kakao.maps.Marker({
        position : markerpos
      });

      marker.setMap(map);

    // // 마커 이미지의 이미지 크기 입니다
    // var imageSize = new kakao.maps.Size(24, 35); 
    
    // // 마커 이미지를 생성합니다    
    // var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    // 마커를 생성합니다

    // var marker = new kakao.maps.Marker({
    //     map: map, // 마커를 표시할 지도
    //     latlong : new kakao.maps.LatLng(storeList.store.latitude, storeList.store.longitude),
    //     position: storeList.store[i].latlong, // 마커를 표시할 위치
    //     title : storeList.store[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    //     image : markerImage // 마커 이미지 
    // });
    }
  }, [storeList]);




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
            <button onClick={editorHandler} className="card" id="5">중식</button>
            <button onClick={editorHandler} className="card" id="6">일식</button>
            <button onClick={editorHandler} className="card" id="7">양식</button>
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
