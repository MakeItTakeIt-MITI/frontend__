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

export const displayZoomControls = (map) => {
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

}


//   마커
export const displayMarker = (map, infowindow) => {
    const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
        position: markerPosition,
        clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
    });

    kakao.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
    return marker;
};

// 인포윈도우를 생성합니다
export const displayInfoWindow = (iwRemoveable, infoContent) => {
    const infoWindow = new kakao.maps.InfoWindow({
        removable: iwRemoveable,
        content: infoContent,
    });

    return infoWindow;
};

export const displayCustomInfoWindow = (map, coords, content) => {
    // const infoWindow = new kakao.maps.InfoWindow({
    const customOverlay = new kakao.maps.CustomOverlay({
        map: map,
        position: coords,
        content: content,
    })




    customOverlay.setMap(map);
    return customOverlay
}

export const moveMapToLocation = (map, latitude, longitude) => {
    const moveLatLon = new kakao.maps.LatLng(latitude, longitude);
    map.setCenter(moveLatLon);
};


export const customInfoContent = (match) => {

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