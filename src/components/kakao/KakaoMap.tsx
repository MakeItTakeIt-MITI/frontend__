import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  }
}

export const KakaoMap = () => {
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
  }, []);
  return <div id="map" className="mobile:w-full mobile:h-[450px]"></div>;
};
