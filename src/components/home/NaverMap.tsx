/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { AllGamesProps } from "../../interfaces/games";
import useLatLongStore from "../../store/useLatLongStore";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    naver: any;
  }
}

const { naver } = window;

interface NaverMapProps extends AllGamesProps {
  handleSetSelected: () => void;
  setSelectedAddress: (arg: string) => void;
  setIsAddressSelected: (arg: boolean) => void;
  isAddressSelected: boolean;
}

const NaverMap = ({
  allGamesData,
  setSelectedAddress,
  setIsAddressSelected,
}: NaverMapProps) => {
  const { latitude, longitude } = useLatLongStore();

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
        setIsAddressSelected((prev) => {
          if (!prev) {
            setIsAddressSelected(true);
            marker.setIcon({
              content: selectedMarkerHTML,
            });
          } else {
            setIsAddressSelected(false);

            marker.setIcon({
              content: overlappedMarkerHTML,
            });
          }
        });
        setSelectedAddress(`${game.court.address}`);
      });

      marker.setIcon({
        content:
          filteredAddresses.length > 1 ? overlappedMarkerHTML : markerHTML,
      });
    });

    // displayMarkers({ allGamesData, map: naverMap, setFilteredGames });
  }, [allGamesData, latitude, longitude]);
  return (
    <div
      id="map"
      className="sm:hidden md:block w-[381px] h-[494px] rounded-[20px]"
    ></div>
  );
};

export default NaverMap;
