import { useEffect } from "react";
import marker from "../../assets/v11/detail-marker.svg";
const { naver } = window;

const CourtMap = () => {
  useEffect(() => {
    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 15,
      pinchZoom: true,
      scrollWheel: true,
    });

    const markerLocation = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.3595704, 127.105399),
      map: map,
      icon: {
        content: `<img src=${marker} alt="marker" />`,
        anchor: new naver.maps.Point(16, 40),
        offset: new naver.maps.Point(0, 0),
      },
    });
    map.setCenter(markerLocation.getPosition());
  }, []);
  return (
    <div
      id="map"
      className="sm:hidden md:block w-[367px] h-[30.875rem] rounded-[1.25rem]"
    ></div>
  );
};

export default CourtMap;
