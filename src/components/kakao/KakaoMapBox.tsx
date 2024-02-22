import { Map, MapInfoWindow, ZoomControl } from "react-kakao-maps-sdk";
export const KakaoMapBox = () => {
  //   useKakaoLoader();

  return (
    <>
      <Map // 지도를 표시할 Container
        id="map"
        className="tablet:w-full  tablet:h-[473px]  mobile:h-[300px] mobile:px-4"
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        level={3} // 지도의 확대 레벨
      >
        {/* <MapTypeControl position={"TOPLEFT"} /> */}
        <ZoomControl position={"LEFT"} />
        <MapInfoWindow // 인포윈도우를 생성하고 지도에 표시합니다
          position={{
            // 인포윈도우가 표시될 위치입니다
            lat: 33.450701,
            lng: 126.570667,
          }}
          removable={true} // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
        >
          <div style={{ padding: "5px", color: "#000" }}>Hello World!</div>
        </MapInfoWindow>
      </Map>
    </>
  );
};
