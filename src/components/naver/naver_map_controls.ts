import { GameDetailField } from "../../interface/gameInterface";
import markerIcon from "../../assets/new_map_marker.svg";
import markerContainerImg from "../../assets/games/game_detail_map_icon.svg"


/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
    interface Window {
        naver: any;
    }
}
const { naver } = window;



export function setCustomMarkers(map: any, allGamesData: GameDetailField[], addressesList: string[], setFilteredGames: (arg: string[]) => void, setDisplayCollapsedList: (arg: boolean) => void) {



    if (allGamesData && Array.isArray(allGamesData)) {

        allGamesData.map((data) => {
            const { latitude, longitude } = data.court;


            new naver.maps.Marker({
                position: new naver.maps.LatLng(latitude, longitude),
                zoom: 12,
                map: map,
                pinchZoom: true,
                title: data.title,
                clickable: true,
                icon: {
                    content: createCustomMapMarker(data, addressesList, setFilteredGames, setDisplayCollapsedList),
                }
            });
        })

    }
}


export function newCustomMarker() {
    return `
    <div class="relative">
    <img src=${markerContainerImg} alt="marker container" />
    <img src=${markerIcon} alt="marker container" class="absolute top-0 right-0 bottom-2 left-0 flex items-center justify-center m-auto" />
    </div>
    `

}



function createCustomMapMarker(data: GameDetailField, addressesList: string[], setFilteredGames: (arg: string[]) => void, setDisplayCollapsedList: (arg: boolean) => void) {
    const link = document.createElement('a');
    const img = document.createElement('img');
    const container = document.createElement('div');
    const startTime = document.createElement('p');
    const fee = document.createElement('p');
    const plusIcon = document.createElement('d');

    link.setAttribute('key', ` ${data.id}`);
    link.setAttribute('id', 'game')
    link.classList.add('relative', 'bg-white', 'flex', 'pl-2', 'items-center', 'gap-2', 'w-[111px]', 'h-9', 'border', 'border-[#4065F5]', 'rounded-2xl',);

    img.src = markerIcon;
    img.alt = 'marker';
    img.classList.add('absolute', 'left-1.5',);
    img.style.width = '24px';
    img.style.height = '24px';

    container.classList.add('leading-3', 'flex', 'flex-col', 'justify-center', 'items-center', 'text-[10px]', 'text-center', 'w-full');
    startTime.textContent = `${data.starttime.slice(0, -3)}-${data.endtime.slice(0, -3)}`;
    fee.textContent = `₩${data.fee.toLocaleString("ko-KR", { currency: "KRW" })}`;
    fee.classList.add('font-bold');

    const occurrences = addressesList.filter(address => address === data.court.address);

    let clickCount = 0;
    if (occurrences.length > 1) {

        plusIcon.classList.add('text-sm', 'absolute', 'flex', 'items-center', 'justify-center', '-top-2', '-right-2', 'm-auto', 'w-5', 'h-5', 'rounded-full', 'bg-white', 'border', 'border-[#4065F5]', 'text-black', 'text-[15px]', 'font-bold')
        link.appendChild(plusIcon);
        plusIcon.textContent = '+';


        link.addEventListener('click', () => {
            console.log(data.id);

            clickCount++;
            if (clickCount === 2) {
                setDisplayCollapsedList(false);
                setFilteredGames([])
                clickCount = 0;


            } else {
                setDisplayCollapsedList(true);
                setFilteredGames([])
                setFilteredGames(occurrences);
            }

        })



    } else { //겹침 마커가 아닌 경우 path 설정
        link.href = `/games/detail/${data.id}`;

    }



    link.addEventListener('mouseover', () => {
        plusIcon.style.backgroundColor = '#003049';
        plusIcon.style.color = 'white';
        plusIcon.style.border = '1px solid #fff';
        link.style.backgroundColor = '#003049';
        link.style.color = 'white';
        link.style.border = '1px solid #fff';

    })
    link.addEventListener('mouseout', () => {
        plusIcon.style.backgroundColor = '#fff';
        plusIcon.style.color = 'black';
        plusIcon.style.border = '1px solid #4065F5';
        link.style.backgroundColor = '#fff';
        link.style.color = 'black';
        link.style.border = '1px solid #4065F5';

    })


    link.appendChild(img);
    container.appendChild(startTime);
    container.appendChild(fee);
    link.appendChild(container);



    return link;
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

