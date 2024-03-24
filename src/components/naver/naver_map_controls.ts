/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
    interface Window {
        naver: any;
    }
}

const { naver } = window;

export const renderMap = (latitude, longitude) => {
    const mapOptions = {
        center: new naver.maps.LatLng(latitude, longitude),
        // center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 12,
        mapTypeId: naver.maps.MapTypeId.NORMAL,
        zoomControl: true,
        zoomControlOptions: {
            position: naver.maps.Position.TOP_RIGHT
        },
    };




    return new naver.maps.Map("map", mapOptions);

}



export const geolocation = (setLatitude, setLongitude) => {

    const address = '서울 종로구 종로 125'
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position);

                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            },
            error => {
                console.error('Error getting geolocation:', error);
            }
        );
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
}