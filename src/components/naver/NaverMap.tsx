/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
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
  displayCollapsedList: boolean;
  filteredGames: string[];
}

export const NaverMapEL = ({
  allGamesData,
  gameSearched,
  setFilteredGames,
  setDisplayCollapsedList,
  displayCollapsedList,
}: NaverMapProp) => {
  const { setCurrentMyLocation, location } = useGeolocationStore();

  const { latitude, longitude } = location;
  const [coordX, setCoordX] = useState<null | number>(null);
  const [coordY, setCoordY] = useState<null | number>(null);

  useEffect(() => {
    if (latitude && longitude) {
      setCoordX(latitude);
      setCoordY(longitude);
    }

    const naverMap = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(coordX, coordY),
      zoom: 14,
      zoomControl: true,
      pinchZoom: true,
      scrollWheel: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.MEDIUM,
        position: naver.maps.Position.TOP_RIGHT,
      },
    });

    const addressesList: string[] = [];
    if (allGamesData && Array.isArray(allGamesData.data)) {
      allGamesData?.data.map((game) => {
        addressesList.push(game.court.address);
        return addressesList;
      });
    }

    setCustomMarkers(
      naverMap,
      allGamesData?.data,
      addressesList,
      setFilteredGames,
      setDisplayCollapsedList
    );

    getCurrentLocation(setCurrentMyLocation, gameSearched);
    setCoordsToSelectedGame(naverMap, coordX, coordY, gameSearched);
  }, [
    allGamesData,
    latitude,
    longitude,
    gameSearched,
    setCurrentMyLocation,
    setFilteredGames,
    displayCollapsedList,
    coordX,
    coordY,
  ]);

  return <section id="map" className="w-full  h-[473px]" />;
};
