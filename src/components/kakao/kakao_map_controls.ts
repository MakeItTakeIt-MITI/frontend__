/* eslint-disable @typescript-eslint/no-explicit-any */
import { GameDetailField } from '../../interface/gameInterface';


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


export const relayout = (map: any) => {

    // 지도를 표시하는 div 크기를 변경한 이후 지도가 정상적으로 표출되지 않을 수도 있습니다
    // 크기를 변경한 이후에는 반드시  map.relayout 함수를 호출해야 합니다 
    // window의 resize 이벤트에 의한 크기변경은 map.relayout 함수가 자동으로 호출됩니다
    map.relayout();
}

export const displayZoomControls = (map: any) => {
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

}

export const getCurrentLocation = (map: any) => {

    // const geolocControl = new kakao.maps.MapTypeControl();
    // map.addControl(geolocControl, kakao.maps.ControlPosition.TOPLEFT);

    // console.log(navigator.geolocation);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            const userLatLng = new kakao.maps.LatLng(lat, lng);
            console.log('current location set');

            map.setCenter(userLatLng);
        });
    } else {
        console.log('현재 브라우저에서 위치를 확인할 수 없습니다.');
    }

}
/** 클로스터로 대체 */
// export const displayAllGamesOnMap = (allGamesData: any, map: any, geocoder: any) => {
//     // const bounds = new window.kakao.maps.LatLngBounds();

//     return allGamesData?.data.map((match: GameDetailField) => {

//         geocoder.addressSearch(
//             match.court.address,
//             function (result: any, status: boolean) {
//                 if (status === kakao.maps.services.Status.OK) {
//                     const coords = new window.kakao.maps.LatLng(
//                         result[0].y,
//                         result[0].x
//                     );

//                     const content = customInfoHTMLContent(match);
//                     displayCustomInfoWindow(map, coords, content);
//                     closeOverlay(content, map, match);

//                     map.setCenter(coords);
//                     relayout(map)


//                 }
//             }
//         );
//     });

// }

export const onClickRelocateMapPosition = (geocoder: any, address: any, map: any, isSearched: any) => {

    return geocoder.addressSearch(
        address,
        function (result: any, status: boolean) {
            isSearched(true)
            if (status === kakao.maps.services.Status.OK) {
                const coords = new window.kakao.maps.LatLng(
                    result[0].y,
                    result[0].x
                );
                const moveLatLon = new kakao.maps.LatLng(coords);
                return map.setCenter(moveLatLon);
            }
        }
    );
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

// export const closeDisplayModalInfoWindow = (map: any, content: any) => {
//     const customOverlay = new kakao.maps.CustomOverlay({
//         map: map,
//         content: content,
//     })



//     return customOverlay
// }


// 커스텀 오버레이 윈도우 
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

// function setDraggable(map: any, draggable: boolean) {
//     // 마우스 드래그로 지도 이동 가능여부를 설정합니다
//     map.setDraggable(draggable);
// }


export const closeOverlay = (customOverlay: any, map: any, match: any) => {


    const closeDiv = (div: HTMLElement) => {
        div.remove()
    }

    const modalInfo = (match: any) => {
        const div = document.createElement('div');
        div.classList.add('z-[999]', 'bg-white', 'p-4', 'flex', 'flex-col', 'justify-around', 'text-sm', 'shadow-lg', 'w-[244px]', 'h-[192px]', 'rounded-xl');

        const innerDiv = document.createElement('div');
        innerDiv.classList.add('flex', 'justify-between');

        const titleP = document.createElement('p');
        titleP.classList.add('font-bold', 'text-lg', 'truncate');
        titleP.textContent = match.title;


        const closeButton = document.createElement('button');
        closeButton.id = 'close-button';
        closeButton.classList.add('text-md', 'font-bold', 'bg-[#9C99B0]', 'p-1', 'w-5', 'h-5', 'rounded-full', 'flex', 'items-center', 'justify-center');
        closeButton.innerHTML = '<p class="text-white">x</p>';
        closeButton.addEventListener('click', () => {
            // div.remove();
            closeDiv(div)

            // setDraggable(map, true)
        });

        const matchStatus = document.createElement('span');
        matchStatus.style.whiteSpace = 'normal';
        if (match.game_status === 'open') {
            matchStatus.textContent = '모집 중';
            matchStatus.classList.add('bg-[#E5F8EB]', 'text-[#00BA34]', 'px-1', 'rounded', 'text-[12px]', 'font-[500]');
        } else {
            matchStatus.textContent = '모집 종료';
            matchStatus.classList.add('bg-[#F7F7F7]', 'text-[#999999]', 'px-1', 'rounded', 'text-[12px]', 'font-[500]');
        }

        innerDiv.appendChild(matchStatus);
        innerDiv.appendChild(closeButton);


        const addressP = document.createElement('p');
        addressP.style.whiteSpace = 'normal';
        addressP.textContent = match.court.address + ' ' + match.court.address_detail;


        const link = document.createElement('a');
        link.href = '/games/detail/' + match.id;
        if (match.game_status === 'open') {
            link.textContent = '참가하기';
            link.classList.add('bg-[#4065F6]', 'h-[40px]', 'flex', 'items-center', 'justify-center', 'text-white', 'rounded-sm');
        } else {
            link.textContent = '모짐 종료';
            link.classList.add('bg-[#999999]', 'h-[40px]', 'flex', 'items-center', 'justify-center', 'text-white', 'rounded-sm');
            link.style.pointerEvents = 'none';
        }



        div.appendChild(innerDiv);
        div.appendChild(titleP);
        div.appendChild(addressP);
        div.appendChild(link);

        return div;
    };


    customOverlay.addEventListener("click", () => {
        // customOverlayOption.setMap(null);
        // console.log('closed custom overlay');
        // console.log('open modal');
        const openModalContent = modalInfo(match);
        displayModalInfoWindow(map, openModalContent);
        // setDraggable(map, false)
    });



};




export const customInfoHTMLContent = (match: any) => {
    const div = document.createElement('div');

    div.setAttribute('key', match.id);
    div.classList.add('bg-white', 'w-[80px]', 'p-2', 'text-center', 'rounded-xl', 'hover:bg-[#4065F6]', 'hover:text-white');
    const contentContainer = document.createElement('div'); // Create a container for the content
    div.appendChild(contentContainer);


    const p1 = document.createElement('p');
    p1.classList.add('text-[10px]', 'text-center', 'text-[#999]',);
    p1.textContent = match.starttime.slice(0, -3);
    contentContainer.appendChild(p1);

    const p2 = document.createElement('p');
    p2.classList.add('text-[12px]', 'text-center', 'text-[#999]', 'truncate');
    p2.textContent = match.court.address_detail;
    contentContainer.appendChild(p2);

    const p3 = document.createElement('p');
    p3.classList.add('font-bold', 'text-[14px]');
    p3.textContent = `${match.fee.toLocaleString("ko-KR", { currency: "KRW" })}원`;
    contentContainer.appendChild(p3);
    return div;
}


export const clusterDisplayAllGames = (map: any, allGamesData: any, geocoder: any) => {
    const clusterer = new kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
        minLevel: 5 // 클러스터 할 최소 지도 레벨 
    });


    // const customAddress: string[] = [];
    // const duplicateAddresses: string[] = [];

    return allGamesData?.data.map((match: GameDetailField) => {
        geocoder.addressSearch(
            match.court.address,
            function (result: any, status: boolean) {
                // allAddressArray.push(match.court.address)



                if (status === kakao.maps.services.Status.OK) {
                    const coords = new kakao.maps.LatLng(
                        result[0].y,
                        result[0].x
                    );

                    const content = customInfoHTMLContent(match);


                    const overlay = displayCustomInfoWindow(map, coords, content);

                    closeOverlay(content, map, match);

                    // const address = match.court.address;
                    // if (customAddress.includes(address)) {
                    //     // This address is a duplicate
                    //     duplicateAddresses.push(address);
                    //     console.log('duplicated', duplicateAddresses);

                    // } else {
                    //     customAddress.push(address);
                    //     console.log('custom', customAddress);

                    // }

                    clusterer.addMarker(overlay);
                    map.setCenter(coords);
                    relayout(map);
                }
            }
        );
    }
    );

}

