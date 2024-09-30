/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import { AllGamesProps } from "../../interfaces/games";
import current_marker from "../../assets/v11/current_pin.svg";
import selected_marker from "../../assets/v11/current_pin_selected.svg";

declare global {
  interface Window {
    naver: any;
  }
}

if (!window.naver) {
  console.error("Error in loading Naver Maps");
}
const { naver } = window;

interface NaverMapProps extends AllGamesProps {
  handleSetSelected: () => void;
  setSelectedAddress: (arg: string) => void;
  setIsAddressSelected: (arg: boolean) => void;
  isAddressSelected: boolean;
  latitude: string | null;
  longitude: string | null;
  selectedAddress: string;
}

const NaverMap = ({
  allGamesData,
  setSelectedAddress,
  setIsAddressSelected,
  latitude,
  longitude,
  selectedAddress,
}: NaverMapProps) => {
  // const { latitude, longitude } = useLatLongStore();
  const [geoLatitude, setGeoLatitude] = useState<null | number>(null);
  const [geoLongitude, setGeoLongtitude] = useState<null | number>(null);

  const addressesList: string[] = [];
  if (allGamesData && Array.isArray(allGamesData)) {
    allGamesData?.forEach((game) => {
      addressesList.push(game.court.address);
    });
  }
  useEffect(() => {
    const naverMap = new naver.maps.Map("map", {
      zoom: 4,
      pinchZoom: true,
      scrollWheel: true,
    });

    // 지도 이동 이벤트
    const location = new naver.maps.LatLng(latitude, longitude);

    if (latitude !== null && longitude !== null) {
      naverMap.setCenter(location);
    }

    console.log("Address list", addressesList.length);
    console.log("Selected Address", selectedAddress);
    let selectedMarker: any | null = null;
    // const markers: string[] = [];

    // 다중 마커 표시
    // allGamesData?.map((game: Game) => {
    for (let index = 0; index < allGamesData?.length; index++) {
      const game = allGamesData[index];

      const filteredAddresses = addressesList.filter(
        (address) => address === game.court.address
      );

      const markerCount = filteredAddresses.length;

      const markerHTML = `
      <a href="${game.id}" id="element-${index}"  class="relative text-[12px] font-bold border border-[#d4d4d4]  bg-[#f5f5f5] w-[120px] h-[32px] rounded-[20px] py-[10px] px-[14px] flex items-center gap-1 justify-center">
           <span>${game.fee.toLocaleString("ko-KR", {
             style: "currency",
             currency: "KRW",
           })}</span>
          <span class="font-[300] text-[10px] text-[#737373]">/ ${game.starttime.slice(0, 5)}</span>
      </a>`;

      const overlappedMarkerHTML = `
      <button id="element-${index}"  type="button" " class="cursor-pointer relative text-[12px] font-bold border border-[#d4d4d4]  bg-[#f5f5f5] w-[120px] h-[32px] rounded-[20px] py-[10px] px-[14px] flex items-center gap-1 justify-center">
          <span>${game.fee.toLocaleString("ko-KR", {
            style: "currency",
            currency: "KRW",
          })}</span>
          <span class="font-[300] text-[10px] text-[#737373]">/ ${game.starttime.slice(0, 5)}</span>
          <div class="absolute -top-2.5 -right-2.5 rounded-full size-[1.25rem] bg-[#fff] text-[#525252]  flex items-center justify-center text-[10px] font-bold ">${markerCount}</div>
      </button>`;

      const selectedMarkerHTML = `
      <button key=${game.id}  id="element-${index}"  type="button" " class="cursor-pointer relative text-[12px] font-bold border border-[#525252]  bg-[#BFF9FA] w-[120px] h-[32px] rounded-[20px] py-[10px] px-[14px] flex items-center gap-1 justify-center">
          <span>${game.fee.toLocaleString("ko-KR", {
            style: "currency",
            currency: "KRW",
          })}</span>
          <span class="font-[300] text-[10px] text-[#737373]">/ ${game.starttime.slice(0, 5)}</span>
          <div class="absolute -top-2.5 -right-2.5 rounded-full size-[1.25rem] bg-[#404040] text-[#fff]  flex items-center justify-center text-[10px] font-bold ">${markerCount}</div>
      </button>`;

      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(
          game.court.latitude,
          game.court.longitude
        ),
        zoom: 12,
        map: naverMap,
      });

      marker.setIcon({
        content:
          filteredAddresses?.length > 1 ? overlappedMarkerHTML : markerHTML,
      });

      naver.maps.Event.addListener(marker, "click", function () {
        console.log("clicked 1");

        //change marker back to non-selected marker on 2 click
        if (selectedMarker === marker) {
          marker.setIcon({
            content: overlappedMarkerHTML,
          });

          selectedMarker = null;
        } else {
          if (selectedMarker) {
            selectedMarker.setIcon({
              content: overlappedMarkerHTML,
            });
          }

          // 다중 마커 렌더링
          marker.setIcon({
            content: selectedMarkerHTML,
          });

          selectedMarker = marker;
        }

        setIsAddressSelected(selectedMarker !== null);
        setSelectedAddress(game.court.address);
      });
    }

    // current geolocation
    function geolocation() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setGeoLatitude(latitude);
          setGeoLongtitude(longitude);
          return;
        },
        (error) => {
          console.error("geolocation error:", error.message);
        }
      );
    }

    const locationBtnHtml = `<button class='mt-[10px] ml-[10px] p-2 flex gap-2 items-center justify-center bg-[#fff] size-[44px] rounded-full  '> <img src=${current_marker} alt="current location"   />  </button>`;
    const selectedLocationBtn = `<button class='mt-[10px] ml-[10px] p-2 flex gap-2 items-center justify-center bg-[#fff] size-[44px] rounded-full  '> <img src=${selected_marker} alt="selected current"   />  </button>`;

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
          customControl.getElement().innerHTML = selectedLocationBtn;

          naverMap.setCenter(new naver.maps.LatLng(geoLatitude, geoLongitude));
        }
      );
    });

    geolocation();
  }, [allGamesData, setSelectedAddress, setIsAddressSelected]);
  return (
    <div
      id="map"
      className="sm:hidden md:block w-[381px] h-[494px] rounded-[20px]"
    ></div>
  );
};

export default NaverMap;
