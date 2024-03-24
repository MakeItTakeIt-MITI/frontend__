import { useEffect, useState } from "react";
import { renderMap } from "./naver_map_controls";
import { getGeolocation } from "./Geolocation";

export const NaverMapEL = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  useEffect(() => {
    renderMap(latitude, longitude);
    getGeolocation(setLatitude, setLongitude);
    console.log(latitude, longitude);
  }, [latitude, longitude]);
  return <section id="map" className="w-full  h-[473px] relative" />;
};
