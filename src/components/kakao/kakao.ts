
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

export const moveMapToLocation = (map: any, latitude: number, longitude: number) => {
    const moveLatLon = new kakao.maps.LatLng(latitude, longitude);
    map.setCenter(moveLatLon);
};


export const customInfoContent = (match: any) => {
    const div = document.createElement('div');


    div.setAttribute('key', match.id);
    div.classList.add('bg-white', 'w-[80px]', 'p-2', 'text-center', 'rounded-xl');

    const contentContainer = document.createElement('div'); // Create a container for the content
    div.appendChild(contentContainer);

    contentContainer.addEventListener("click", () => {
        console.log("clicked")
    });

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




// const joinGameModal = () => {
//     const div = document.createElement('div');
//     div.style.padding = '6px';
//     div.style.zIndex = '9999'; // Set a high z-index value
//     div.style.position = 'fixed'; // Ensure modal is fixed in place

//     const p = document.createElement('p');
//     p.textContent = '안녕하세요, 모달입니다.';

//     div.appendChild(p);

//     return div;
// }
