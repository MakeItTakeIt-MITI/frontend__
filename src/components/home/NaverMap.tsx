import { useEffect } from "react";
import { AllGamesProps } from "../../interfaces/games";
import { displayMarkers } from "./map-controls";
import useLatLongStore from "../../store/useLatLongStore";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    naver: any;
  }
}

const { naver } = window;

const NaverMap = ({ allGamesData }: AllGamesProps) => {
  const { latitude, longitude } = useLatLongStore();
  useEffect(() => {
    const naverMap = new naver.maps.Map("map", {
      zoom: 13,
      pinchZoom: true,
      scrollWheel: true,
    });

    // 지도 이동 이벤트
    const location = new naver.maps.LatLng(latitude, longitude);
    if (latitude !== null && longitude !== null) {
      naverMap.setCenter(location);
    }

    // 다중 마커 표시
    displayMarkers({ allGamesData, map: naverMap });
  }, [allGamesData, latitude, longitude]);
  return (
    <div
      id="map"
      className="sm:hidden md:block w-[381px] h-[494px] rounded-[20px]"
    ></div>
  );
};

export default NaverMap;
