import { GameDetailField } from "../../interface/gameInterface";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
    interface Window {
        kakao: any;
    }
}
const { kakao } = window;

// 지도 생성
export const displayMap = () => {
    const container = document.getElementById("map");

    const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 5,
    };
    return new kakao.maps.Map(container, options);
};

export const displayZoomControls = (map: any) => {
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

}



// 인포윈도우를 생성합니다

export const displayCustomInfoWindow = (map: any, coords: any, content: string) => {
    // const infoWindow = new kakao.maps.InfoWindow({
    const customOverlay = new kakao.maps.CustomOverlay({
        map: map,
        position: coords,
        content: content,
    })

    customOverlay.setMap(map);
    return customOverlay
}

export const moveMapToLocation = (map: any, latitude: number, longitude: number) => {
    const moveLatLon = new kakao.maps.LatLng(latitude, longitude);
    map.setCenter(moveLatLon);
};


export const customInfoContent = (match: GameDetailField) => {

    return `
    <div key="${match.id}" class="bg-white w-[80px] p-2 text-center rounded-xl">
    <p class="text-[10px] text-center text-[#999]">${match.starttime.slice(0, -3)}</p>  
    <p class="text-[12px] text-center text-[#999]">${match.court.address_detail}</p>
    <p class="font-bold text-[14px]">${match.fee.toLocaleString("ko-KR", { currency: "KRW" })}원</p>
    <div></div>
</div>

  `;
}

export const joinGameModal = () => {
    return `
    <div style{padding:6px;}> 
        <p>Would you like to join the game? </p>
    </div>
    `
}