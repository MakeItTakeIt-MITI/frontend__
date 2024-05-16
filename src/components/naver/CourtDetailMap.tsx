import { useEffect } from "react";
import { newCustomMarker } from "./naver_map_controls";
declare global {
  interface Window {
    naver: any;
  }
}
const { naver } = window;

export const CourtDetailMap = ({ courtData }: any) => {
  useEffect(() => {
    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(
        courtData?.data.latitude,
        courtData?.data.longitude
      ),
      zoom: 14,
      zoomControl: true,
      pinchZoom: true,
      draggable: true,
      scrollWheel: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.MEDIUM,
        position: naver.maps.Position.TOP_RIGHT,
      },
    });

    new naver.maps.Marker({
      position: new naver.maps.LatLng(
        courtData?.data.latitude,
        courtData?.data.longitude
      ),
      map: map,
      icon: {
        content: newCustomMarker(),
      },
    });
  }, []);
  return <section id="map" className="w-full h-[303px] rounded-lg" />;
};
