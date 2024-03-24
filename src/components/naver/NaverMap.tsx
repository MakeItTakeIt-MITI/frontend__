import { useEffect, useState } from "react";
import {
  addressToLatLongCoord,
  displayAllGames,
  getGeolocation,
  renderMap,
} from "./naver_map_controls";

export const NaverMapEL = ({ allGamesData, searchAddress }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [addressList, setAddressList] = useState([]);
  useEffect(() => {
    renderMap(latitude, longitude);
    getGeolocation(setLatitude, setLongitude);
    addressToLatLongCoord("서울 성동구 고산자로 253");
    displayAllGames(setAddressList, allGamesData);
    console.log(addressList);
  }, [latitude, longitude, allGamesData]);
  return <section id="map" className="w-full  h-[473px] relative" />;
};
