/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
    interface Window {
        naver: any;
    }
}

const { naver } = window;

export const renderMap = (latitude: number | null, longitude: number | null) => {
    const mapOptions = {
        center: new naver.maps.LatLng(latitude, longitude),
        // center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 14,
        mapTypeId: naver.maps.MapTypeId.NORMAL,
        zoomControl: true,
        zoomControlOptions: {
            position: naver.maps.Position.TOP_RIGHT
        },
    };


    return new naver.maps.Map("map", mapOptions);

}




export const getGeolocation = (setLatitude, setLongitude) => {
    if (navigator.geolocation) { // GPS를 지원하면
        navigator.geolocation.getCurrentPosition(function (position) {
            // console.log('current location', position.coords.latitude, position.coords.longitude); // lat lng을 통해 좌표값을 얻어옵니다.
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        }, function (error) {
            console.error(error);
        }, {
            enableHighAccuracy: false,
            maximumAge: 0,
            timeout: Infinity
        });
    } else {
        alert('GPS not available on current browser');
    }
}


export const addressToLatLongCoord = (inputAddress: string) => {
    naver.maps.Service.geocode({ address: inputAddress }, function (status, response) {
        if (status === naver.maps.Service.Status.ERROR) {
            return alert('Something wrong!');
        } else {
            const latitude = response.result.items[0].point.x
            const longitude = response.result.items[0].point.y
            // console.log(response.result.items[0].point);
            console.log('longitude', longitude);
            console.log('latitude', latitude);



        }

        // 성공 시의 response 처리
    });
    // [출처] 네이버 지도 JavaScript API v3 배우기(11) - 주소 ↔ 좌표 변환(Geocoder), 현재 위치 이동(Geoloaction)|작성자 별동산
}