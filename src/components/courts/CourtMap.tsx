import { useEffect } from "react";
import marker from "../../assets/v11/detail-marker.svg";
const { naver } = window;

interface CourtsMapProps {
  courtsData: any;
}

const CourtMap = ({ courtsData }) => {
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
