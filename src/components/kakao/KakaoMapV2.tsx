/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect } from "react";
import {
  customInfoContent,
  displayCustomInfoWindow,
  displayMap,
  displayZoomControls,
  moveMapToLocation,
} from "./kakao";
import { GameDetailField } from "../../interface/gameInterface";

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

export const KakaoMapV2 = ({ allGamesData, searchAddress }: any) => {
  useEffect(() => {
    const map = displayMap();
    displayZoomControls(map);
    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(searchAddress, function (result: any, status: any) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });

    allGamesData?.data.map((match: GameDetailField) => {
      geocoder.addressSearch(
        match.court.address,
        function (result: any, status: boolean) {
          if (status === kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );
            const content = customInfoContent(match); // html element content
            displayCustomInfoWindow(map, coords, content); //display custom infobox
            moveMapToLocation(map, result[0].y, result[0].x); // moves to clicked game
          }
        }
      );
    });
  }, [allGamesData, searchAddress]);

  return <div id="map" className="w-full  h-[473px]   " />;
};

// https://devtalk.kakao.com/t/topic/129631 custom overlay madal
