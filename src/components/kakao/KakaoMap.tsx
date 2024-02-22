/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { GameDetailField } from "../../interface/gameInterface";

// interface GameDataProps {}

interface GeocoderResult {
  x: number;
  y: number;
}

export const KakaoMap = ({ allGamesData, searchAddress }: any) => {
  const createMap = () => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 4,
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

  const addMarkerWithInfowindow = (
    map: any,
    coords: any,
    content: string,
    match: GameDetailField
  ) => {
    const infowindow = new window.kakao.maps.CustomOverlay({
      map: map,
      position: coords,
      content: content,
    });
    window.kakao.maps.event.addListener(infowindow, "click", function () {
      alert("window");
      console.log(match?.court.address);
    });
    infowindow.setMap(map);
  };

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
    const geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.addressSearch(searchAddress, function (result: any, status: any) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // // 인포윈도우로 장소에 대한 설명을 표시합니다
        // const infowindow = new kakao.maps.InfoWindow({
        //   content:
        //     '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>',
        // });
        // infowindow.open(kakaoMap);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        kakaoMap.setCenter(coords);
      }
    });

    if (allGamesData) {
      allGamesData?.data.map((match: GameDetailField) => {
        // console.log(match.court.address);

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
                  currency: "KRW",
                }
              )}원</p>
              <div> 
              </div>
            </div>
          `;

              addMarkerWithInfowindow(kakaoMap, coords, content, match);
              moveMapToLocation(kakaoMap, result[0].y, result[0].x);
            }
          }
        );
      });
    }
    //
  }, [allGamesData, searchAddress]);

  return (
    <div
      id="map"
      className="tablet:w-full  tablet:h-[473px]  mobile:h-[300px] mobile:px-4 "
    ></div>
  );
};
