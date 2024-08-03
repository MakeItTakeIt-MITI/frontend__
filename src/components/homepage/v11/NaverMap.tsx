import React, { useEffect } from "react";
const { naver } = window;

const NaverMap = () => {
  useEffect(() => {
    new naver.maps.Map("map", {
      // center: new naver.maps.LatLng(latitude, longitude),
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 13,
      pinchZoom: true,
      scrollWheel: true,
    });
  }, []);
  return <div id="map" className=" w-[381px] h-[494px] rounded-[20px]"></div>;
};

export default NaverMap;
