/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect } from "react";
import {
  displayAllGamesOnMap,
  displayMap,
  displayZoomControls,
  onClickRelocateMapPosition,
} from "./kakao_map_controls";

declare global {
  interface Window {
    kakao: any;
  }
}

// const { kakao } = window;

export const KakaoMapV2 = ({ allGamesData, searchAddress, refetch }: any) => {
  useEffect(() => {
    const map = displayMap();
    displayZoomControls(map);
    const geocoder = new window.kakao.maps.services.Geocoder();
    onClickRelocateMapPosition(geocoder, searchAddress, map);
    refetch();
    displayAllGamesOnMap(allGamesData, map, geocoder);
  }, [allGamesData, searchAddress, refetch]);

  return <div id="map" className="w-full  h-[473px] relative"></div>;
};
