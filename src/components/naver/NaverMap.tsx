import { useEffect, useState } from "react";
import {
  addressToLatLongCoord,
  displayAllGames,
  getGeolocation,
  renderMap,
} from "./naver_map_controls";
import { NavermapsProvider } from "react-naver-maps";
import { Container as MapDiv, NaverMap, Marker } from "react-naver-maps";

export const NaverMapEL = ({ allGamesData, searchAddress }) => {
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

  return (
    <>
      {/* <NavermapsProvider ncpClientId={clientId}> */}
      <MapDiv
        className="w-full h-[463px]"
        // style={{
        //   width: "100%",
        //   height: "600px",
        // }}
      >
        <NaverMap />
      </MapDiv>
      {/* </NavermapsProvider> */}
    </>
  );
  // <section id="map" className="w-full  h-[473px] relative" />;
};
