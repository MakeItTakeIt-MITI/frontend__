/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { GameDetailField } from "../../interface/gameInterface";
import { setMarkers } from "./naver_map_controls";

declare global {
  interface Window {
    naver: any;
  }
}
const { naver } = window;

interface NaverMapProp {
  allGamesData: { data: GameDetailField; message: string; status_code: number };
}

export const NaverMapEL = ({ allGamesData }: NaverMapProp) => {
  useEffect(() => {
    // map create
    const naverMap = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
    });
    // marker

    allGamesData?.data.map((data) => {
      const { latitude, longitude } = data.court;
      // const latitude = data.court.latitude;
      // const longtitude = data.court.longitude;

      const markers = setMarkers(latitude, longitude, naverMap, data);
    });
  }, []);

  return <section id="map" className="w-full  h-[473px]" />;
};
