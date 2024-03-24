import { useEffect } from "react";
import { renderMap } from "./naver_map_controls";
import { getGeolocation } from "./Geolocation";

export const NaverMap = () => {
  useEffect(() => {
    const map = renderMap();

    // geolocation(setLatitude, setLongitude);
    getGeolocation();
  }, []);

  return <section id="map" className="w-full  h-[473px] relative" />;
};
