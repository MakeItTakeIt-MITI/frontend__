/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { GameDetailField } from "../../interface/gameInterface";
import { setCoordsToSelectedGame } from "./naver_map_controls";
import useGeolocationStore from "../../store/useGeolocationStore";
import { getCurrentLocation } from "./geolocation";
import markerIcon from "../../assets/new_map_marker.svg";
import markerIconSelected from "../../assets//svg/map-marker-white.svg";
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
      // center: new naver.maps.LatLng(latitude, longitude),
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

    let selectedMarker: any | null = null;
    const markers: string[] = [];

    for (let index = 0; index < allGamesData.data.length; index++) {
      const data = allGamesData.data[index];

      const { latitude, longitude } = data.court;
      const markerContent = `<a href=${`/games/detail/${data.id}`} id="element-${index}" class='relative bg-white flex pl-[5.5px] px-[7px] items-center gap-[5px] w-[125px] h-9 border border-[#4065F5] rounded-2xl'>  
      <img src=${markerIcon} alt="marker icon"/>  
          <div class="flex flex-col justify-center items-center">
                <h1 class="text-black text-[10px] leading-3">${data.starttime.slice(0, -3)}-${data.endtime.slice(0, -3)}</h1>
                <h2 class="text-black text-xs font-bold leading-[18px]">${data.fee.toLocaleString("ko-KR", { currency: "KRW" })}</h2>
          </div> 
      </a>`;
      const selectedMarkerContent = `<div id="element-${index}" class='relative bg-[#4065F5] flex pl-[5.5] px-[7px] items-center gap-2 w-[125px] h-9 rounded-2xl'> 
      <img src=${markerIconSelected}  alt='marker icon' />  
         <div class="flex flex-col justify-center items-center">
                <h1 class="text-white text-[10px] leading-3">${data.starttime.slice(0, -3)}-${data.endtime.slice(0, -3)}</h1>
                <h2 class="text-white text-xs font-bold leading-[18px]">${data.fee.toLocaleString("ko-KR", { currency: "KRW" })}</h2>
            </div> 
      <div class='text-sm absolute flex items-center justify-center -top-2 -right-2 m-auto w-5 h-5 rounded-full bg-[#4065F5] border border-[#4065F5] text-white text-[15px] font-bold' >+</div> </div>`;
      const markerListContent = `<div id="element-${index}" class='relative bg-white flex pl-[5.5] px-[7px] items-center gap-2 w-[125px] h-9 border border-[#4065F5] rounded-2xl'> 
      <img src=${markerIcon}  alt='marker icon' /> 
             <div class="flex flex-col justify-center items-center">
                 <h1 class="text-black text-[10px] leading-3">${data.starttime.slice(0, -3)}-${data.endtime.slice(0, -3)}</h1>
                 <h2 class="text-black text-xs font-bold leading-[18px]">${data.fee.toLocaleString("ko-KR", { currency: "KRW" })}</h2>
             </div> 
      <div class='text-sm absolute flex items-center justify-center -top-2 -right-2 m-auto w-5 h-5 rounded-full bg-white border border-[#4065F5] text-black text-[15px] font-bold' >+</div> </div>`;

      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(latitude, longitude),
        zoom: 12,
        map: naverMap,
        pinchZoom: true,
        title: data.title,
        clickable: true,
        icon: {
          content: markerContent,
        },
      });

      const filteredAddresses = addressesList.filter(
        (address) => address === data.court.address
      );

      marker.setIcon({
        content:
          filteredAddresses.length > 1 ? markerListContent : markerContent,
      });

      naver.maps.Event.addListener(marker, "click", function () {
        if (selectedMarker === marker) {
          marker.setIcon({
            content: markerListContent,
          });
          selectedMarker = null;
        } else {
          if (selectedMarker) {
            selectedMarker.setIcon({
              content: markerListContent,
            });
          }
          marker.setIcon({
            content:
              filteredAddresses.length > 1
                ? selectedMarkerContent
                : markerContent,
          });
          selectedMarker = marker;
        }

        setDisplayCollapsedList(selectedMarker !== null);
        setFilteredGames(selectedMarker !== null ? filteredAddresses : []);
      });
      markers.push(marker);
    }

    //     // cluster;
    //     new MarkerClustering({
    //       minClusterSize: 1,
    //       maxZoom: 14,
    //       map: naverMap,
    //       markers: markers,
    //       gridSize: 120,
    //       disableClickZoom: false,
    //       icons: [
    //         {
    //           content: `<div style="position: absolute; width: 40px; height: 40px; background: #4065F5; border-radius: 20px; color: #fff; display: flex; justify-content: center; align-items: center; font-weight: bold;">
    // +
    // </div>`,
    //           size: naver.maps.Size(40, 40),
    //           anchor: naver.maps.Point(20, 20),
    //         },
    //       ],
    //     });

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
    setDisplayCollapsedList,
  ]);

  return <section data-testid="map" id="map" className="w-full  h-[473px]" />;
};
