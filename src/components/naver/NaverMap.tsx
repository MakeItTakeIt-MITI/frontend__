import { useEffect, useState } from "react";
import { geolocation, renderMap } from "./naver_map_controls";

export const NaverMap = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  useEffect(() => {
    const map = renderMap();

    geolocation(setLatitude, setLongitude);

    console.log(latitude, longitude);
  }, [latitude, longitude]);

  return <section id="map" className="w-full  h-[473px] relative" />;
};
