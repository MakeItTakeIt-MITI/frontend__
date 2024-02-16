import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  }
}

interface GeocoderResult {
  x: number; // longitude
  y: number; // latitude
}

export const KakaoMap = ({ allGamesData }) => {
  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 2, //지도의 레벨(확대, 축소 정도)
    };
    const kakaoMap = new window.kakao.maps.Map(container, options);
    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성
    const zoomControl = new window.kakao.maps.ZoomControl();
    kakaoMap.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

    // kakao 경기 목록
    const geocoder = new window.kakao.maps.services.Geocoder();

    allGamesData?.data.map((match) => {
      return geocoder.addressSearch(
        // "제주특별자치도 제주시 첨단로 242",
        match.court.address,
        function handleGeocoderResult(
          result: GeocoderResult[],
          status: GeocoderResult[]
        ) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );

            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new window.kakao.maps.Marker({
              map: kakaoMap,
              position: coords,
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            const infowindow = new window.kakao.maps.InfoWindow({
              content: `
              <div class="flex items-center justify-around w-[169px] h-[62px] p-[12px] rounded-xl shadow-lg  ">
              <div class="">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle opacity="0.6" cx="16" cy="16" r="16" fill="#C1E1FF"/>
              <path d="M17.945 24.93C20.1238 23.0125 24 19.095 24 15.5C24 13.5109 23.2098 11.6032 21.8033 10.1967C20.3968 8.79018 18.4891 8 16.5 8C14.5109 8 12.6032 8.79018 11.1967 10.1967C9.79018 11.6032 9 13.5109 9 15.5C9 19.095 12.875 23.0125 15.055 24.93C15.4526 25.2849 15.967 25.4811 16.5 25.4811C17.033 25.4811 17.5474 25.2849 17.945 24.93ZM14 15.5C14 14.837 14.2634 14.2011 14.7322 13.7322C15.2011 13.2634 15.837 13 16.5 13C17.163 13 17.7989 13.2634 18.2678 13.7322C18.7366 14.2011 19 14.837 19 15.5C19 16.163 18.7366 16.7989 18.2678 17.2678C17.7989 17.7366 17.163 18 16.5 18C15.837 18 15.2011 17.7366 14.7322 17.2678C14.2634 16.7989 14 16.163 14 15.5Z" fill="#4065F6"/>
             </svg>

          </div>

          <h2 class="text-[14px]">
          ${match.title}
          </h2>

          </div>

            </div>`,
            });
            infowindow.open(kakaoMap, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            kakaoMap.setCenter(coords);
          }
        }
      );
    });
  }, [allGamesData]);
  return (
    <div
      id="map"
      // className="block w-full  h-[450px]"
      className="w-full h-[450px]"
    ></div>
  );
};

export const KakaoDetailContainer = ({ match }) => {
  return (
    <>
      <div className="flex items-center justify-around w-[169px] h-[62px] p-[12px] rounded-xl shadow-lg">
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <circle opacity="0.6" cx="16" cy="16" r="16" fill="#C1E1FF" />
            <path
              d="M17.945 24.93C20.1238 23.0125 24 19.095 24 15.5C24 13.5109 23.2098 11.6032 21.8033 10.1967C20.3968 8.79018 18.4891 8 16.5 8C14.5109 8 12.6032 8.79018 11.1967 10.1967C9.79018 11.6032 9 13.5109 9 15.5C9 19.095 12.875 23.0125 15.055 24.93C15.4526 25.2849 15.967 25.4811 16.5 25.4811C17.033 25.4811 17.5474 25.2849 17.945 24.93ZM14 15.5C14 14.837 14.2634 14.2011 14.7322 13.7322C15.2011 13.2634 15.837 13 16.5 13C17.163 13 17.7989 13.2634 18.2678 13.7322C18.7366 14.2011 19 14.837 19 15.5C19 16.163 18.7366 16.7989 18.2678 17.2678C17.7989 17.7366 17.163 18 16.5 18C15.837 18 15.2011 17.7366 14.7322 17.2678C14.2634 16.7989 14 16.163 14 15.5Z"
              fill="#4065F6"
            />
          </svg>
        </div>
        <h2 className="text-[14px]">{match.title}</h2>
      </div>
    </>
  );
};
