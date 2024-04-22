import { GameDetailField } from "../../interface/gameInterface";
import basketballIcon from "../../assets/map_basketball_icon.png"
/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
    interface Window {
        naver: any;
    }
}
const { naver } = window;



export function setCustomMarkers(map: any, allGamesData: GameDetailField[]) {
    allGamesData.map((data) => {
        const { latitude, longitude } = data.court;

        new naver.maps.Marker({
            position: new naver.maps.LatLng(latitude, longitude),
            map: map,
            title: data.title,
            clickable: true,
            icon: {
                content: createCustomMapMarker(data)
            }

        });

    })


}

function createCustomMapMarker(data: GameDetailField) {
    const link = document.createElement('a');
    const img = document.createElement('img');
    const container = document.createElement('div');
    const startTime = document.createElement('p');
    const fee = document.createElement('p');

    link.href = `/games/detail/${data.id}`;
    link.classList.add('bg-white', 'flex', 'items-center', 'gap-2', 'w-[125px]', 'h-[44px]', 'border', 'border-[#FF4A4A]', 'rounded-2xl', 'hover:bg-[#4065F5]', 'hover:text-white', 'hover:border-black');
    img.src = basketballIcon;
    img.alt = 'bktball';
    img.classList.add('size-1px', 'absolute', 'left-2',);
    container.classList.add('flex', 'flex-col', 'justify-center', 'items-center', 'text-[12px]', 'text-center', 'w-full');
    startTime.textContent = `${data.starttime.slice(0, -3)}-${data.endtime.slice(0, -3)}`;
    fee.textContent = `₩${data.fee.toLocaleString("ko-KR", { currency: "KRW" })}`;
    fee.classList.add('font-bold');

    link.appendChild(img);
    container.appendChild(startTime);
    container.appendChild(fee);
    link.appendChild(container);

    return link;
}


export function setCoordsToSelectedGame(naverMap: any, gameLatitude: number, gameLongitude: number, gameSearched: boolean) {
    if (gameSearched) {
        // navigator.geolocation.getCurrentPosition(function () {
        const setLatLong = naver.maps.LatLng(gameLatitude, gameLongitude);
        naverMap.setCenter(setLatLong);
        naverMap.setZoom(16);
        // });
    }
}

