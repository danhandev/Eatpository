//* global kakao */
import React, { useEffect, useState, useRef } from "react";
import "../Css/Maps.css";

import ListAPI from "../API/ListAPI";
import DetailAPI from "./../API/DetailAPI";
const { kakao } = window;

const Map = () => {
  const [storeList, setStorelist] = useState(
    JSON.parse(sessionStorage.getItem("result"))
  );
  const [editorList, setEditorlist] = useState(
    JSON.parse(sessionStorage.getItem("listkey"))
  );
  const [categoryList, setCategorylist] = useState(
    JSON.parse(sessionStorage.getItem("categorykey"))
  );
  const [detail, setDetail] = useState(
    JSON.parse(sessionStorage.getItem("detail"))
  );
  const [result, setResult] = useState(
    (editorList + categoryList).split("").map(Number)
  );
  const [storeDetail, setStore] = useState([]);
  const [images, setImage] = useState("");
  const [kakaoMap, setKakaoMap] = useState(null);
  const container = useRef();

  // 첫 스위치 초기화
  useEffect(() => {
    for (let i = 0; i < 8; i++) {
      if (result[i] === 1) {
        document.getElementById(i).classList.toggle("clicked");
      }
    }
  }, []);

  // editor 혹은 category 클릭 시 result 변화
  const editorHandler = (e) => {
    let id = e.target.id;
    result[id] = !result[id] * 1;
    document.getElementById(id).classList.toggle("clicked");
    let editornum = result.slice(0, 4);
    editornum = editornum.join("");
    let categorynum = result.slice(4, 8).join("");

    ListAPI(editornum, categorynum).then((response) => {
      sessionStorage.setItem("listkey", JSON.stringify(editornum));
      sessionStorage.setItem("categorykey", JSON.stringify(categorynum));
      setStorelist(JSON.parse(sessionStorage.getItem("result")));
    });
    
  };

  const number = storeList.length;
  const listitems = storeList.map(store => {
    return (
      <div className="lists" key={store.id}>
        <div className="store_name">{store.store_name} </div>
        <div className="main_menu">{store.main_menu}</div>
      </div>
    );
  });

  const detailHandler = e => {
    
      console.log('detail handler');
      console.log('detail : ',detail);
      console.log('store detail : ',storeDetail);
      console.log('store images : ',images);
    
    
  }

  //  const Details = () => {
  //   return (
  //     <div className="detailWindow" key={store.store_information.id}>
  //       <div className="store_name">{store.store_information.store_name} </div>
  //       <div className="addressText">{store.store_information.address}</div>
  //       <div className="time">{store.store_information.time}</div>
  //       <div className="admin_comment">
  //         {store.store_information.addmin_comment}
  //       </div>
  //       <div className="images">{store.store_images.image[1]}</div>
  //       <div className="images">{store.store_images.image[2]}</div>
  //       <div className="images">{store.store_images.image[3]}</div>
  //     </div>
  //   );
  // };

  // store를 image가 포함된 객체로 받은다음 매핑으로 store_information에 접근
  // 접근한 store_information과 image를 각각 렌더링하고 카드 컴포넌트로 만들어냄
  // 이 친구를 어디서 function으로 소환 ..?
  // const Details = store.map((store) => {
  //   return (
  //     <div className="detailWindow" key={store.store_information.id}>
  //       <div className="store_name">{store.store_information.store_name} </div>
  //       <div className="addressText">{store.store_information.address}</div>
  //       <div className="time">{store.store_information.time}</div>
  //       <div className="admin_comment">
  //         {store.store_information.addmin_comment}
  //       </div>
  //       <div className="images">{store.store_images.image[1]}</div>
  //       <div className="images">{store.store_images.image[2]}</div>
  //       <div className="images">{store.store_images.image[3]}</div>
  //     </div>
  //   );
  // });

  // var content =
  //   '<div class="infoWindow">' +
  //   ' <div class="title">' +
  //   '  <div class="storeName"> ' +
  //   detail.store_information.store_name +
  //   " </div>" +
  //   '  <div class="categoryText"> ' +
  //   detail.store_information.main_menu +
  //   " </div>" +
  //   "</div>" +
  //   '  <div class="addressText"> ' +
  //   detail.store_information.address +
  //   '</div>'+
  //   '<button onClick="moreDetail()"'+
  //   ' class="more">' +
  //   "자세히 보기" +
  //   "</button>" +
  //   "</div>";

  // 지도와 마커를 생성합니다
  useEffect(() => {
    //const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.55036, 126.92544),
      level: 3
    };
    const map = new kakao.maps.Map(container.current, options);
    setKakaoMap(map);
  }, [container]);

  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }
    // save center position
    const center = kakaoMap.getCenter();
    // relayout and...
    kakaoMap.relayout();
    // restore
    kakaoMap.setCenter(center);
  }, [kakaoMap]);

  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }
    const imageSrc = [
        process.env.PUBLIC_URL + `/assets/mini1.png`,
        process.env.PUBLIC_URL + `/assets/mini2.png`,
        process.env.PUBLIC_URL + `/assets/mini3.png`,
        process.env.PUBLIC_URL + `/assets/mini4.png`,
        process.env.PUBLIC_URL + `/assets/mini5.png`
      ],
      imageSize = new kakao.maps.Size(48, 48),
      imageOption = { offset: new kakao.maps.Point(10, 48) };

    // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다

    for (var i = 0; i < storeList.length; i++) {
      var storeId = storeList[i].id;
      var markerpos = new kakao.maps.LatLng(
        storeList[i].latitude,
        storeList[i].longitude
      );

      if (storeList[i].user === 2) {
        var markerImage = new kakao.maps.MarkerImage(
          imageSrc[0],
          imageSize,
          imageOption
        );
      } else if (storeList[i].user === 3) {
        var markerImage = new kakao.maps.MarkerImage(
          imageSrc[1],
          imageSize,
          imageOption
        );
      } else if (storeList[i].user === 4) {
        var markerImage = new kakao.maps.MarkerImage(
          imageSrc[2],
          imageSize,
          imageOption
        );
      } else if (storeList[i].user === 5) {
        var markerImage = new kakao.maps.MarkerImage(
          imageSrc[3],
          imageSize,
          imageOption
        );
      }

      var marker = new kakao.maps.Marker({
        map: kakaoMap,
        position: markerpos,
        image: markerImage,
        id: storeId
      });

      marker.id = storeId;

      var infowindow = new kakao.maps.CustomOverlay({
        position: marker.getPosition(),
        clickable: true,
        id: marker.id,
        //content: content
      });
      (function(marker, infowindow) {
        // 마커에 마우스 이벤트를 등록합니다
        kakao.maps.event.addListener(marker, "click", function() {
          DetailAPI(marker.id).then((response) => {  
            // setStore(response.store_information);
            // setImage(response.store_images);
            // 기본 레이아웃 세팅
            infowindow.setContent(
              '<div class="infoWindow">' +
                ' <div class="detailTitle">' +
                '  <div class="storeName"> ' +
                response.store_information.store_name +
                " </div>" +
                '  <div class="categoryText"> ' +
                response.store_information.category +
                " </div>" +
                "</div>" +
                '  <div class="addressText"> ' +
                response.store_information.main_menu +
                " </div>" +
                '  <div class="addressText"> ' +
                response.store_information.address +
                " </div>" +
                '  <div class="addressText"> ' +
                response.store_information.admin_comment +
                " </div>" +
                '  <div class="addressText"> ' +
                response.store_information.time +
                " </div>" +
               `<img src=${response.store_images.image1}>`+
               '</img>'+
                "</div>"
            );
            //버튼 액션 만들어주는 function
            infowindow.setContent(detailHandler());
          });
          // 마커에 마우스 클릭 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
          infowindow.setMap(kakaoMap, marker);

          // 마커에 이벤트 등록될까요?
          //addEventHandler(content, "Click", onClick);

          kakaoMap.setCenter(marker.getPosition());
        });
      
        // 마커에 마우스아웃 이벤트를 등록합니다
        kakao.maps.event.addListener(kakaoMap, "click", function() {
          // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
          infowindow.setMap();
        });
      })(marker, infowindow);
    }
  }, [kakaoMap, storeList]);
  // 리스트를 생성합니다

  return (
    <div>
      <div
        id="map"
        style={{
          width: "100vw",
          height: "calc(100vh - 48px)"
        }}
        ref={container}
      ></div>
      <div className="wrapper">
        <div className="sectionFirst">
          <p>원하는 에디터를 선택해주세요</p>
          <div className="cardsSection">
            <button onClick={editorHandler} className="card" id="0">
              송
            </button>
            <button onClick={editorHandler} className="card" id="1">
              큐
            </button>
            <button onClick={editorHandler} className="card" id="2">
              란
            </button>
            <button onClick={editorHandler} className="card" id="3">
              표
            </button>
          </div>
        </div>
        <div className="sectionSecond">
          <p>원하는 음식 종류를 선택해주세요</p>
          <div className="cardsSection">
            <button onClick={editorHandler} className="card korean" id="4">
              한식
            </button>
            <button onClick={editorHandler} className="card chinese" id="5">
              중식
            </button>
            <button onClick={editorHandler} className="card japanese" id="6">
              일식
            </button>
            <button onClick={editorHandler} className="card dining" id="7">
              양식
            </button>
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
          <button className="randomButton">
            랜덤으로 맛집을 추천받아볼까요?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Map;
