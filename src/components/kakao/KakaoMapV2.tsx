import { useEffect } from "react";
import {
  customInfoContent,
  displayCustomInfoWindow,
  displayMap,
  displayZoomControls,
  moveMapToLocation,
} from "./kakao";

const { kakao } = window;

export const KakaoMapV2 = ({ allGamesData, searchAddress }) => {
  useEffect(() => {
    const map = displayMap();
    displayZoomControls(map);
    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(searchAddress, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });

    allGamesData?.data.map((match) => {
      geocoder.addressSearch(match.court.address, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
          const content = customInfoContent(match); // html element content
          displayCustomInfoWindow(map, coords, content); //display custom infobox
          moveMapToLocation(map, result[0].y, result[0].x); // moves to clicked game
        }
      });
    });
  }, [allGamesData, searchAddress]);

  return <div id="map" className="w-full  h-[473px]   " />;
};

// const infoWindowContent =
//   '<div style="height:60px; width:82px;  padding:4px; ">Hello World!</div>';
// const iwRemoveable = true;

// const displayedInfoWindow = displayInfoWindow(
//   iwRemoveable,
//   infoWindowContent
// );

// displayMarker(map, displayedInfoWindow);
