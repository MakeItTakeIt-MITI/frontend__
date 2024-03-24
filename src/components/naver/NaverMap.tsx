import { useEffect, useState } from "react";
import {
  addressToLatLongCoord,
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
  }, [latitude, longitude]);
  return <section id="map" className="w-full  h-[473px] relative" />;
};
