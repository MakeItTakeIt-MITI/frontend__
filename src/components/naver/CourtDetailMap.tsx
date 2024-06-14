import { useEffect } from "react";
import { newCustomMarker } from "./naver_map_controls";

const { naver } = window;

export const CourtDetailMap = ({ courtData }: any) => {
  useEffect(() => {
    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(
        courtData?.data.latitude,
        courtData?.data.longitude
      ),
      zoom: 14,
      pinchZoom: true,
      scrollWheel: true,
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
  }, [courtData]);
  return (
    <section
      id="map"
      className="w-full h-[303px] mobile:hidden tablet:block rounded-lg"
    />
  );
};
