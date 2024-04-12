/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

declare global {
  interface Window {
    naver: any;
  }
}
const { naver } = window;

export const NaverMapEL = ({ allGamesData }) => {
  const allGamesArray = allGamesData.data;

  useEffect(() => {
    // map create
    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
    });
    // marker

    // const coords = [];
    allGamesArray.map((data) => {
      const lat = data.court.latitude;
      const long = data.court.longitude;
      // coords.push({ lat, long });
      // console.log(coords);

      new naver.maps.Marker({
        position: new naver.maps.LatLng(lat, long),
        //4번에서 생성한 지도 세팅
        map: map,
      });
    });
  }, [allGamesArray]);

  return <div id="map" className="w-full  h-[473px]"></div>;
  // <section id="map" className="w-full  h-[473px] relative" />;
};
