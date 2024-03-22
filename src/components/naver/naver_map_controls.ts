/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
    interface Window {
        naver: any;
    }
}

const { naver } = window;

export const renderMap = () => {
    const mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 10,
    };

    return new naver.maps.Map("map", mapOptions);

}