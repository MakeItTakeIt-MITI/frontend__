/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
    interface Window {
        naver: any;
    }
}
const { naver } = window;

interface MarkersProps {
    allGamesData: any;
    map: any;
}

// iterate game data
export const displayMarkers = ({ allGamesData, map }: MarkersProps) => {
    const repeatedAddress = []
    const addresses: string[] = []


    // console.log(allGamesData);
    const addressesList: string[] = [];
    if (allGamesData && Array.isArray(allGamesData)) {
        allGamesData?.map((game) => {
            addressesList.push(game.court.address);
            return addressesList;
        });
    }

    // console.log(addressesList);





    allGamesData?.forEach((game: any) => {

        const filteredAddresses = addressesList.filter(
            (address) => address === game.court.address
        );

        const markerHTML = `
            <a href="game/${game.id}" class="relative text-[12px] font-bold border border-[#d4d4d4]  bg-[#f5f5f5] w-[120px] h-[32px] rounded-[20px] py-[10px] px-[14px] flex items-center gap-1 justify-center">
                <span>${game.fee}</span>
                <span class="font-[300] text-[10px] text-[#737373]">/ ${game.starttime.slice(0, 5)}</span>
            </a>`;

        const overlappedMarkerHTML = `
            <a href="game/${game.id}" class="cursor-pointer relative text-[12px] font-bold border border-[#d4d4d4]  bg-[#f5f5f5] w-[120px] h-[32px] rounded-[20px] py-[10px] px-[14px] flex items-center gap-1 justify-center">
                <span>${game.fee.toLocaleString("ko-KR", {
            style: "currency",
            currency: "KRW",
        })}</span>
                <span class="font-[300] text-[10px] text-[#737373]">/ ${game.starttime.slice(0, 5)}</span>
                <div class="absolute -top-2.5 -right-2.5 rounded-full size-[1.25rem] bg-[#fff] text-[#525252]  flex items-center justify-center text-[10px] font-bold ">${filteredAddresses.length}</div>
            </a>`;



        const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(game.court.latitude, game.court.longitude),
            zoom: 12,
            map: map,
            pinchZoom: true,
            title: 'title',
            clickable: true,
            icon: {
                content: markerHTML,
            },
        });


        marker.setIcon({
            content:
                filteredAddresses.length > 1 ? overlappedMarkerHTML : markerHTML,
        });




        // Create marker on the map
        // new naver.maps.Marker({
        //     position: new naver.maps.LatLng(
        //         game.court.latitude,
        //         game.court.longitude
        //     ),
        //     map: map,
        //     icon: {
        //         content: overlappedMarkerHTML,
        //     },
        // });
    });

};
