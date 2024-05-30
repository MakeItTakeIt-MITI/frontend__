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
    const location = new naver.maps.LatLng(latitude, longitude);
    const naverMap = new naver.maps.Map("map", {
      center: location,
      zoom: 15,
      zoomControl: true,
      pinchZoom: true,
      scrollWheel: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.MEDIUM,
        position: naver.maps.Position.TOP_RIGHT,
      },
    });

    console.log(naverMap.getBounds());

    const addressesList: string[] = [];
    if (allGamesData && Array.isArray(allGamesData.data)) {
      allGamesData?.data.map((game) => {
        addressesList.push(game.court.address);
        return addressesList;
      });
    }

    let mapBounds = naverMap.getBounds();

    setCustomMarkers(
      naverMap,
      allGamesData?.data,
      addressesList,
      setFilteredGames,
      setDisplayCollapsedList
    );

    getCurrentLocation(setCurrentMyLocation, gameSearched);
    setCoordsToSelectedGame(naverMap, latitude, longitude, gameSearched);
  }, [allGamesData, latitude, longitude, gameSearched, setCurrentMyLocation]);

  return <section id="map" className="w-full  h-[473px]" />;
};
