/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        naver: any;

    }
}
const { naver } = window;


interface MarkersProps {
    allGamesData: any
    map: any
}


// iterate game data
export const displayMarkers = ({ allGamesData, map }: MarkersProps) => {
    for (let index = 0; index < allGamesData?.length; index++) {
        const game = allGamesData[index];
        const marker =
            `<a href=${`game/${game.id}`} class="relative text-[12px] font-bold border border-[#d4d4d4]  hover:border-[#525252] bg-[#f5f5f5] hover:bg-[#BFF9FA]  w-[120px] h-[32px] rounded-[20px] py-[10px] px-[14px] flex items-center gap-1 justify-center ">
        <span>${game.fee}</span>
        <span>/</span>
        <span class="font-[300] text-[10px] text-[#737373]">23:00</span>
        </a>`;

        new naver.maps.Marker({
            position: new naver.maps.LatLng(
                game.court.latitude,
                game.court.longitude
            ),
            map: map,
            icon: {
                content: marker,
            },

        })
    }

}