import { useEffect } from "react";
import marker from "../../assets/v11/detail-marker.svg";
const { naver } = window;

const MobileDetailMap = () => {
  useEffect(() => {
    const map1 = new naver.maps.Map("map2", {
      zoom: 13,
      pinchZoom: true,
      scrollWheel: true,
    });

    new naver.maps.Marker({
      position: new naver.maps.LatLng(37.3595704, 127.105399),
      map: map1,
      icon: {
        content: `<img src=${marker} alt="marker" />`,
      },
    });
  }, []);
  return <div id="map2" className="md:hidden w-full h-[232px] "></div>;
};

export default MobileDetailMap;
