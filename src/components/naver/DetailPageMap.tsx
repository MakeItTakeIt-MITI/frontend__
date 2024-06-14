import { useEffect } from "react";
import { GameDetailBoxProp } from "../../interface/gameInterface";
import { newCustomMarker } from "./naver_map_controls";

const { naver } = window;

export const DetailPageMap: React.FC<GameDetailBoxProp> = ({
  gameDetail,
  width,
  height,
}) => {
  useEffect(() => {
    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(
        gameDetail?.court.latitude,
        gameDetail?.court.longitude
      ),
      zoom: 14,
      pinchZoom: true,
      scrollWheel: true,
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
  }, [gameDetail]);
  return (
    <div
      id="map"
      style={{
        width: width,
        height: height,
      }}
      className=" mobile:h-[300px] mobile:hidden tablet:block rounded-lg"
    />
  );
};
