import { useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    naver: any;
  }
}

const { naver } = window;

const NaverMap = () => {
  useEffect(() => {
    const map = new naver.maps.Map("map", {
      // center: new naver.maps.LatLng(latitude, longitude),
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 13,
      pinchZoom: true,
      scrollWheel: true,
    });

    const data = [
      { long: 127.105399, lat: 37.3595704, title: "₩10,000/23:00" },
      { long: 127.1067, lat: 37.3961, title: "₩10,000/23:00" },
      { long: 127.1067, lat: 37.3961, title: "₩10,000/23:00" },
    ];

    data.forEach((info) => {
      const customSingleMarker = `<a href=${`game/1`} class="relative text-[12px] font-bold border border-[#d4d4d4]  hover:border-[#525252] bg-[#f5f5f5] hover:bg-[#BFF9FA]  w-[120px] h-[32px] rounded-[20px] py-[10px] px-[14px] flex items-center gap-1 justify-center ">

      <span>₩10,000</span>
      <span>/</span>
      <span class="font-[300] text-[10px] text-[#737373]">23:00</span>
        
          </a>`;

      new naver.maps.Marker({
        position: new naver.maps.LatLng(info.lat, info.long),
        map: map,
        icon: {
          content: customSingleMarker,
        },
      });
    });

    //       markers.push(marker);
  }, []);
  return (
    <div
      id="map"
      className="sm:hidden md:block w-[381px] h-[494px] rounded-[20px]"
    ></div>
  );
};

export default NaverMap;
