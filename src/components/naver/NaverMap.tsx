import { useEffect } from "react";
const { naver } = window;

export const NaverMapEL = () => {
  // const [latitude, setLatitude] = useState(null);
  // const [longitude, setLongitude] = useState(null);
  // const [addressList, setAddressList] = useState([]);
  // useEffect(() => {
  //   renderMap(latitude, longitude);
  //   getGeolocation(setLatitude, setLongitude);
  //   addressToLatLongCoord("서울 성동구 고산자로 253");
  //   displayAllGames(setAddressList, allGamesData);

  //   console.log(addressList);
  // }, [latitude, longitude, allGamesData]);
  // const clientId = import.meta.env.VITE_NAVER_CLIENT_ID;

  useEffect(() => {
    // map create
    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
    });
    // marker
    new naver.maps.Marker({
      position: new naver.maps.LatLng(37.3595704, 127.105399),
      //4번에서 생성한 지도 세팅
      map: map,
    });
  }, []);

  return <div id="map" className="w-full "></div>;
  // <section id="map" className="w-full  h-[473px] relative" />;
};
