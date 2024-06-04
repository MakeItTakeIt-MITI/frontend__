import markerIcon from "../../assets/new_map_marker.svg";
import markerContainerImg from "../../assets/games/game_detail_map_icon.svg"


/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
    interface Window {
        naver: any;
    }
}
const { naver } = window;



export function newCustomMarker() {
    return `
    <div class="relative">
    <img src=${markerContainerImg} alt="marker container" />
    <img src=${markerIcon} alt="marker container" class="absolute top-0 right-0 bottom-2 left-0 flex items-center justify-center m-auto" />
    </div>
    `

}


export function setCoordsToSelectedGame(naverMap: any, coordX: number | null, coordY: number | null, gameSearched: boolean) {
    if (gameSearched) {
        // navigator.geolocation.getCurrentPosition(function () {
        const setLatLong = naver.maps.LatLng(coordX, coordY);
        naverMap.setCenter(setLatLong);
        naverMap.setZoom(16);
        // });
    }
}

