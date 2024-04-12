import { GameDetailField } from "../../interface/gameInterface";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
    interface Window {
        naver: any;
    }
}
const { naver } = window;


export const setMarkers = (latitude: string, longitude: string, map: any, data: GameDetailField) => {
    new naver.maps.Marker({
        position: new naver.maps.LatLng(latitude, longitude),
        map: map,
        title: data.title,
        clickable: true,
        // icon: {
        //     //html element를 반환하는 CustomMapMarker 컴포넌트 할당
        //     // content: <div>hello wolrd</ div >
        //     //마커의 크기 지정
        //     size: new naver.maps.Size(24, 24),
        //     //마커의 기준위치 지정
        //     anchor: new naver.maps.Point(19, 58),
        // },
    });
}

export const CustomMapMarker = () => {

    // const mobileContentArray = [
    //     '<div style="margin: 0; display: table; padding: 0.5rem; table-layout: auto; border-radius: 2.3rem; border: 0.2rem solid var(--color--darkgreen); background: white; cursor: pointer; position: relative; z-index: 2">',
    //     '<div style="display: table-cell; display: inline-block; width: 2.5rem; height: 2.5rem; background-image: url(Images/markerIcon.svg); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>',
    //     '<span style="position: absolute; border-style: solid; border-width: 1rem 1rem 0 1rem; border-color: #ffffff transparent; display: block; width: 0; z-index: 1; top: 3.1rem; left: 0.75rem;"></span>',
    //     '<span style="position: absolute; border-style: solid; border-width: 1rem 1rem 0 1rem; border-color: var(--color--darkgreen) transparent; display: block; width: 0; z-index: 0; top: 3.35rem; left: 0.75rem;"></span>',
    //     '</div>',
    // ];


    // if (windowWidth < 768) return mobileContentArray.join('');

    // return PCContentArray.join('');
};

