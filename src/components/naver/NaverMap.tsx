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
  gameLatitude: number;
  gameLongitude: number;
  refetch: () => void;
  gameSearched: boolean;
  isGameSearched: (arg: boolean) => void;
}

export const NaverMapEL = ({
  allGamesData,
  gameLatitude,
  gameLongitude,
  gameSearched,
  isGameSearched,
}: NaverMapProp) => {
  const { setCurrentMyLocation, location } = useGeolocationStore();

  const { latitude, longitude } = location;

  useEffect(() => {
    // map create
    const naverMap = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(latitude, longitude),
      zoom: 14,
      zoomControl: true,
      pinchZoom: true,
      draggable: true,
      scrollWheel: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
    });
    setCustomMarkers(naverMap, allGamesData.data);
    // getCurrentLocation(setCurrentMyLocation);
    setCoordsToSelectedGame(
      naverMap,
      gameLatitude,
      gameLongitude,
      isGameSearched,
      setCurrentMyLocation
    );
  }, [allGamesData, gameLatitude, gameLongitude]);

  return <section id="map" className="w-full  h-[473px]" />;
};
