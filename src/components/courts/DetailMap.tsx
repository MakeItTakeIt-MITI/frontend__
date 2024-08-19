import { useEffect } from "react";
import marker from "../../assets/v11/detail-marker.svg";
const { naver } = window;

const DetailMap = () => {
  useEffect(() => {
    const map = new naver.maps.Map("map", {
      // center: new naver.maps.LatLng(latitude, longitude),
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 13,
      pinchZoom: true,
      scrollWheel: true,
    });

    new naver.maps.Marker({
      position: new naver.maps.LatLng(37.3595704, 127.105399),
      map: map,
      icon: {
        content: `<img src=${marker} alt="marker" />`,
      },
    });
  }, []);
  return (
    <div
      id="map"
      className="md:block sm:hidden w-[367px] h-[618px] rounded-[1.25rem]"
    ></div>
  );
};

export default DetailMap;
