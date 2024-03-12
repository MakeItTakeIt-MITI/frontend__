

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

export const displayCustomInfoWindow = (map: any, coords: any, content: any) => {
    const customOverlay = new kakao.maps.CustomOverlay({
        map: map,
        position: coords,
        content: content,
    })

    customOverlay.setMap(map);



    return customOverlay
}

export const displayModalInfoWindow = (map: any, content: any) => {
    const centerCoords = map.getCenter();

    const customOverlay = new kakao.maps.CustomOverlay({
        map: map,
        position: centerCoords,
        content: content,
    })

    customOverlay.setMap(map);



    return customOverlay
}

export const moveMapToLocation = (map: any, latitude: number, longitude: number) => {
    const moveLatLon = new kakao.maps.LatLng(latitude, longitude);
    map.setCenter(moveLatLon);
};

export const closeOverlay = (customOverlay: any, customOverlayOption: any, map: any, match: any) => {


    customOverlay.addEventListener("click", () => {
        customOverlayOption.setMap(null);
        console.log('closed custom overlay')
        const openModalContent = modalInfo(match);
        displayModalInfoWindow(map, openModalContent);


    });


}

export const customInfoContent = (match: any) => {




    const div = document.createElement('div');

    div.setAttribute('key', match.id);
    div.classList.add('bg-white', 'w-[80px]', 'p-2', 'text-center', 'rounded-xl');

    const contentContainer = document.createElement('div'); // Create a container for the content
    div.appendChild(contentContainer);


    const p1 = document.createElement('p');
    p1.classList.add('text-[10px]', 'text-center', 'text-[#999]');
    p1.textContent = match.starttime.slice(0, -3);
    contentContainer.appendChild(p1);

    const p2 = document.createElement('p');
    p2.classList.add('text-[12px]', 'text-center', 'text-[#999]');
    p2.textContent = match.court.address_detail;
    contentContainer.appendChild(p2);

    const p3 = document.createElement('p');
    p3.classList.add('font-bold', 'text-[14px]');
    p3.textContent = `${match.fee.toLocaleString("ko-KR", { currency: "KRW" })}원`;
    contentContainer.appendChild(p3);
    return div;


}




export const modalInfo = (match: any) => {
    return `
    <div class="bg-white p-4 flex flex-col justify-around text-sm shadow-lg w-[244px] h-[192px] rounded-xl">
    <div class="flex justify-between">
    <p class="font-bold text-lg">${match.title}</p>
            <button class="text-md font-bold bg-[#9C99B0] p-1 w-5 h-5 rounded-full flex items-center justify-center">
                <p class="text-white">x</p>  
            </button>
        </div>


        <div>
            <p style="white-space: normal;">${match.court.address} ${match.court.address_detail}</p>
        </div>

        <a href="/games/detail/${match.id}" class="bg-[#4065F6] h-[40px] flex items-center justify-center text-white rounded-sm">
            참가하기
        </a>
    </div>
    `;
};
