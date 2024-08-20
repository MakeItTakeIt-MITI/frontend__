import { useEffect } from "react";
import { AllGamesProps } from "../../interfaces/games";
import { displayMarkers } from "./map-controls";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    naver: any;
  }
}

const { naver } = window;

const NaverMap = ({ allGamesData }: AllGamesProps) => {
  useEffect(() => {
    const map = new naver.maps.Map("map", {
      zoom: 13,
      pinchZoom: true,
      scrollWheel: true,
    });

    // displayMarkers(allGamesData, map);
  }, [allGamesData]);
  return (
    <div
      id="map"
      className="sm:hidden md:block w-[381px] h-[494px] rounded-[20px]"
    ></div>
  );
};

export default NaverMap;
