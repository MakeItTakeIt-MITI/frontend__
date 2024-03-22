import { useEffect } from "react";
import { renderMap } from "./naver_map_controls";

export const NaverMap = () => {
  useEffect(() => {
    renderMap();
  }, []);

  return <section id="map" className="w-full  h-[473px] relative" />;
};
