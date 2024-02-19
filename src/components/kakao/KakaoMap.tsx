/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { GameDetailField } from "../../interface/gameInterface";

interface GameDataProps {
  allGamesData: GameDetailField;
}

interface GeocoderResult {
  x: number;
  y: number;
}

const createMap = () => {
  const container = document.getElementById("map");
  const options = {
    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
    level: 2,
  };
  return new window.kakao.maps.Map(container, options);
};

const addZoomControl = (map: any) => {
  const zoomControl = new window.kakao.maps.ZoomControl();
  map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
};

const moveMapToLocation = (map: any, latitude: number, longitude: number) => {
  const moveLatLon = new window.kakao.maps.LatLng(latitude, longitude);
  map.setCenter(moveLatLon);
};

const addMarkerWithInfowindow = (map: any, coords: any, content: string) => {
  // const infowindow = new window.kakao.maps.InfoWindow({
  const infowindow = new window.kakao.maps.CustomOverlay({
    // content: content,
    map: map,
    // position: coords,
    position: coords,
    content: content,
  });
  infowindow.setMap(map);
  // infowindow.open(map);
};

const KakaoMap = ({ allGamesData }: GameDataProps) => {
  useEffect(() => {
    if (!window.kakao) {
      console.error("카카오 지도가 존재하지 않습니다");
      return;
    }

    if (!allGamesData) {
      console.error("경기 정보가 존재하지 않습니다.");
      return;
    }

    const kakaoMap = createMap();
    addZoomControl(kakaoMap);

    allGamesData.data.forEach((match) => {
      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.addressSearch(
        match.court.address,
        function (result: GeocoderResult[], status: GeocoderResult[]) {
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );
            const content = `
            <div  key={match.id} class=" hover:cursor-pointer w-[76px]  h-[56px] p-2  flex flex-col  items-center justify-center bg-white rounded-lg drop-shadow-lg">
              <p class="text-[12px]  text-[#999]">${
                match.court.address_detail
              }</p>
              <p class="font-bold text-[14px]">${match.fee.toLocaleString(
                "ko-KR",
                {
                  // style: "currency",
                  currency: "KRW",
                }
              )}원</p>
            </div>
          `;
            addMarkerWithInfowindow(kakaoMap, coords, content);
            moveMapToLocation(kakaoMap, result[0].y, result[0].x);
          }
        }
      );
    });
  }, [allGamesData]);

  return (
    <div
      id="map"
      className="tablet:w-full  tablet:h-[473px]  mobile:h-[300px] mobile:px-4 "
    ></div>
  );
};

export default KakaoMap;
