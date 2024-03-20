/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import {
  displayAllGamesOnMap,
  displayMap,
  displayZoomControls,
  getCurrentLocation,
  // getCurrentLocation,
  onClickRelocateMapPosition,
  relayout,
} from "./kakao_map_controls";

declare global {
  interface Window {
    kakao: any;
  }
}

export const KakaoMapV2 = ({ allGamesData, searchAddress }: any) => {
  const [searchAddressChanged, setSearchAddressChanged] = useState(false);

  useEffect(() => {
    // 지도를 생성
    const map = displayMap();
    relayout(map);

    // 지도 렌더링, 현재위치로 변경

    // 지도 확대/축소 컨트롤러 생성
    displayZoomControls(map);
    // 주소를 좌표로 변환하고 경기 리스트에서 경기 클릭 이벤트 (경기 주소로 이동)
    const geocoder = new window.kakao.maps.services.Geocoder();
    onClickRelocateMapPosition(
      geocoder,
      searchAddress,
      map,
      setSearchAddressChanged
    );

    // 커스텀 오버레이를 사용해 모든 경기 표시
    displayAllGamesOnMap(allGamesData, map, geocoder);
    if (!searchAddressChanged) {
      getCurrentLocation(map);
    }
  }, [allGamesData, searchAddress]);

  return <section id="map" className="w-full  h-[473px] relative" />;
};
