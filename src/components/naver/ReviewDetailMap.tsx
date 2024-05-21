import { useEffect } from "react";
import { newCustomMarker } from "./naver_map_controls";
declare global {
  interface Window {
    naver: any;
  }
}
const { naver } = window;

export const ReviewDetailMap = ({ gameData }: any) => {
  useEffect(() => {
    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(
        gameData?.data.latitude,
        gameData?.data.longitude
      ),
      zoom: 14,
      pinchZoom: true,
      scrollWheel: true,
    });

    new naver.maps.Marker({
      position: new naver.maps.LatLng(
        gameData?.data.latitude,
        gameData?.data.longitude
      ),
      map: map,
      icon: {
        content: newCustomMarker(),
      },
    });
  }, [gameData]);
  return <section id="map" className="w-full h-[303px] rounded-lg" />;
};
