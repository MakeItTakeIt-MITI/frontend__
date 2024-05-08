/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { GameDetailField } from "../../interface/gameInterface";
import {
  setCoordsToSelectedGame,
  setCustomMarkers,
} from "./naver_map_controls";
import useGeolocationStore from "../../store/useGeolocationStore";
import { getCurrentLocation } from "./geolocation";

declare global {
  interface Window {
    naver: any;
  }
}
const { naver } = window;

interface NaverMapProp {
  allGamesData: {
    data: GameDetailField[];
    message: string;
    status_code: number;
  };

  refetch: () => void;
  gameSearched: boolean;
  isGameSearched: (arg: boolean) => void;
  setFilteredGames: (arg: string[]) => void;
  setDisplayCollapsedList: (arg: boolean) => void;
}

export const NaverMapEL = ({
  allGamesData,
  gameSearched,
  setFilteredGames,
  setDisplayCollapsedList,
}: NaverMapProp) => {
  const { setCurrentMyLocation, location } = useGeolocationStore();

  const { latitude, longitude } = location;

  useEffect(() => {
    const naverMap = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(latitude, longitude),
      zoom: 14,
      zoomControl: true,
      pinchZoom: true,
      draggable: true,
      scrollWheel: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.MEDIUM,
        position: naver.maps.Position.TOP_RIGHT,
      },
    });

    const addressesList: string[] = [];
    allGamesData?.data.map((game) => {
      addressesList.push(game.court.address);
      return addressesList;
    });

    setCustomMarkers(
      naverMap,
      allGamesData.data,
      addressesList,
      setFilteredGames,
      setDisplayCollapsedList
    );
    getCurrentLocation(setCurrentMyLocation, gameSearched);
    setCoordsToSelectedGame(naverMap, latitude, longitude, gameSearched);
  }, [allGamesData, latitude, longitude, gameSearched, setCurrentMyLocation]);

  return <section id="map" className="w-full  h-[473px]" />;
};
