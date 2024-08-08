import { useEffect } from "react";
const { naver } = window;

const GameDetailMap = () => {
  useEffect(() => {
    new naver.maps.Map("map", {
      // center: new naver.maps.LatLng(latitude, longitude),
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 13,
      pinchZoom: true,
      scrollWheel: true,
    });
  }, []);
  return (
    <div id="map" className=" w-full h-[31.25rem] rounded-[1.25rem]"></div>
  );
};

export default GameDetailMap;
