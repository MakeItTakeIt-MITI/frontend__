/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { AllGamesProps } from "../../interfaces/games";
// import useLatLongStore from "../../store/useLatLongStore";
import current_marker from "../../assets/v11/current_pin.svg";

declare global {
  interface Window {
    naver: any;
  }
}

const { naver } = window;

interface NaverMapProps extends AllGamesProps {
  handleSetSelected: () => void;
  setSelectedAddress: (arg: string) => void;
  setIsAddressSelected: (arg: boolean) => void;
  isAddressSelected: boolean;
  latitude: string | null;
  longitude: string | null;
}

const NaverMap = ({
  allGamesData,
  setSelectedAddress,
  setIsAddressSelected,
  latitude,
  longitude,
}: NaverMapProps) => {
  // const { latitude, longitude } = useLatLongStore();
  const [geoLatitude, setGeoLatitude] = useState<null | number>(null);
  const [geoLongitude, setGeoLongtitude] = useState<null | number>(null);

  useEffect(() => {
    const naverMap = new naver.maps.Map("map", {
      zoom: 13,
      pinchZoom: true,
      scrollWheel: true,
    });

    // 지도 이동 이벤트
    const location = new naver.maps.LatLng(latitude, longitude);

    if (latitude !== null && longitude !== null) {
      naverMap.setCenter(location);
    }
    const addressesList: string[] = [];
    if (allGamesData && Array.isArray(allGamesData)) {
      allGamesData?.map((game) => {
        addressesList.push(game.court.address);
        return addressesList;
      });
    }

    // 다중 마커 표시
    allGamesData?.forEach((game: any) => {
      const filteredAddresses = addressesList.filter(
        (address) => address === game.court.address
      );

      // setFilteredGames(filtsweredAddresses);

      const markerHTML = `
          <a href="game/${game.id}" class="relative text-[12px] font-bold border border-[#d4d4d4]  bg-[#f5f5f5] w-[120px] h-[32px] rounded-[20px] py-[10px] px-[14px] flex items-center gap-1 justify-center">
               <span>${game.fee.toLocaleString("ko-KR", {
                 style: "currency",
                 currency: "KRW",
               })}</span>
              <span class="font-[300] text-[10px] text-[#737373]">/ ${game.starttime.slice(0, 5)}</span>
          </a>`;

      const overlappedMarkerHTML = `
          <button id="marker" type="button" " class="cursor-pointer relative text-[12px] font-bold border border-[#d4d4d4]  bg-[#f5f5f5] w-[120px] h-[32px] rounded-[20px] py-[10px] px-[14px] flex items-center gap-1 justify-center">
              <span>${game.fee.toLocaleString("ko-KR", {
                style: "currency",
                currency: "KRW",
              })}</span>
              <span class="font-[300] text-[10px] text-[#737373]">/ ${game.starttime.slice(0, 5)}</span>
              <div class="absolute -top-2.5 -right-2.5 rounded-full size-[1.25rem] bg-[#fff] text-[#525252]  flex items-center justify-center text-[10px] font-bold ">${filteredAddresses.length}</div>
          </button>`;

      const selectedMarkerHTML = `
          <button id="marker" type="button" " class="cursor-pointer relative text-[12px] font-bold border border-[#525252]  bg-[#BFF9FA] w-[120px] h-[32px] rounded-[20px] py-[10px] px-[14px] flex items-center gap-1 justify-center">
              <span>${game.fee.toLocaleString("ko-KR", {
                style: "currency",
                currency: "KRW",
              })}</span>
              <span class="font-[300] text-[10px] text-[#737373]">/ ${game.starttime.slice(0, 5)}</span>
              <div class="absolute -top-2.5 -right-2.5 rounded-full size-[1.25rem] bg-[#404040] text-[#fff]  flex items-center justify-center text-[10px] font-bold ">${filteredAddresses.length}</div>
          </button>`;

      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(
          game.court.latitude,
          game.court.longitude
        ),
        zoom: 12,
        map: naverMap,
        pinchZoom: true,
        clickable: true,
        icon: {
          content: markerHTML,
        },
      });

      naver.maps.Event.addListener(marker, "click", function () {
        // @ts-expect-error
        setIsAddressSelected((prev) => {
          const newState = !prev;
          marker.setIcon({
            content: newState ? selectedMarkerHTML : overlappedMarkerHTML,
          });
          return newState;
        });

        setSelectedAddress(`${game.court.address}`);
      });

      marker.setIcon({
        content:
          filteredAddresses.length > 1 ? overlappedMarkerHTML : markerHTML,
      });
    });

    // current geolocation
    function geolocation() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setGeoLatitude(latitude);
          setGeoLongtitude(longitude);
          console.log(geoLatitude, geoLongitude);
          return;
        },
        (error) => {
          console.error("geolocation error:", error.message);
        }
      );
    }

    const locationBtnHtml = `<button class='bg-black p-2 flex gap-2 items-center'> <img src=${current_marker} alt="current" class="size-10"  /> 현재 위치 (임시) </button>`;

    // custom overlay
    naver.maps.Event.once(naverMap, "init", function () {
      const customControl = new naver.maps.CustomControl(locationBtnHtml, {
        position: naver.maps.Position.TOP_LEFT,
      });

      customControl.setMap(naverMap);

      naver.maps.Event.addDOMListener(
        customControl.getElement(),
        "click",
        function () {
          // geolocation();
          naverMap.setCenter(new naver.maps.LatLng(geoLatitude, geoLongitude));
        }
      );
    });

    geolocation();
    // displayMarkers({ allGamesData, map: naverMap, setFilteredGames });
  }, [
    NaverMap,
    allGamesData,
    latitude,
    longitude,
    geoLatitude,
    geoLongitude,
    latitude,
    longitude,
    setGeoLatitude,
    setGeoLongtitude,
  ]);
  return (
    <div
      id="map"
      className="sm:hidden md:block w-[381px] h-[494px] rounded-[20px]"
    ></div>
  );
};

export default NaverMap;
