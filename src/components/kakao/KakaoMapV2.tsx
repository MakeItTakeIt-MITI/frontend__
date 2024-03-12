/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect } from "react";
import {
  closeOverlay,
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
            const overlayoption = displayCustomInfoWindow(map, coords, content); //display custom infobox
            closeOverlay(content, overlayoption, map, match);

            moveMapToLocation(map, result[0].y, result[0].x); // moves to clicked game
            map.setCenter(coords);
          }
        }
      );
    });
  }, [allGamesData, searchAddress]);

  return <div id="map" className="w-full  h-[473px] relative"></div>;
};
