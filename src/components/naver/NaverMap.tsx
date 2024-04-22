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
}

export const NaverMapEL = ({ allGamesData, gameSearched }: NaverMapProp) => {
  const { setCurrentMyLocation, location } = useGeolocationStore();

  const { latitude, longitude } = location;
  // const allCoordinates = [];
  // allGamesData.data.map((game: GameDetailField) => {
  //   // console.log(game.court.address);
  //   const address = game.court.address;
  //   return allCoordinates.push(address);
  // });

  // console.log(allCoordinates);

  // const duplicateIndices = {};
  // allCoordinates.forEach((address, index) => {
  //   if (duplicateIndices[address] === undefined) {
  //     duplicateIndices[address] = [index];
  //   } else {
  //     duplicateIndices[address].push(index);
  //   }
  // });
  // const duplicateArrays = [];
  // for (const key in duplicateIndices) {
  //   if (duplicateIndices[key].length > 1) {
  //     duplicateArrays.push(
  //       duplicateIndices[key].map((index) => allCoordinates[index])
  //     );
  //   }
  // }

  // console.log(duplicateArrays);

  // const uniqueCoordinates = allCoordinates.filter(
  //   (coord, index, self) =>
  //     index ===
  //     self.findIndex(
  //       (c) => c.latitude === coord.latitude && c.longitude === coord.longitude
  //     )
  // );

  // console.log(uniqueCoordinates);

  // console.log(allCoordinates);

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
        style: naver.maps.ZoomControlStyle.MEDIUM,
        // position: naver.maps.Position.RIGHT,
      },
    });

    const addressesList: string[] = [];

    allGamesData.data.map((game) => {
      addressesList.push(game.court.address);
      return addressesList;
    });

    // console.log(arr);

    setCustomMarkers(naverMap, allGamesData.data, addressesList);
    getCurrentLocation(setCurrentMyLocation, gameSearched);
    setCoordsToSelectedGame(naverMap, latitude, longitude, gameSearched);
  }, [allGamesData, latitude, longitude, gameSearched, setCurrentMyLocation]);

  return <section id="map" className="w-full  h-[473px]" />;
};
