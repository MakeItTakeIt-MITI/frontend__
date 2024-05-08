import { useEffect } from "react";
import { GameDetailBoxProp } from "../../interface/gameInterface";
import { newCustomMarker } from "./naver_map_controls";
declare global {
  interface Window {
    naver: any;
  }
}
const { naver } = window;

export const GameDetailMap: React.FC<GameDetailBoxProp> = ({ gameDetail }) => {
  useEffect(() => {
    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(
        gameDetail?.court.latitude,
        gameDetail?.court.longitude
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
        gameDetail?.court.latitude,
        gameDetail?.court.longitude
      ),
      map: map,
      icon: {
        content: newCustomMarker(),
      },
    });
  }, []);
  return (
    <section
      id="map"
      className="w-full  laptop:h-[495px] mobile:h-[300px] rounded-lg"
    />
  );
};
