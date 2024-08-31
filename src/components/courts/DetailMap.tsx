import { useEffect } from "react";
import marker from "../../assets/v11/detail-marker.svg";
import { useCourtDetailData } from "../../hooks/useCourtDetailData";
import { useParams } from "react-router-dom";
const { naver } = window;

const DetailMap = () => {
  const { id } = useParams();
  const courtId = Number(id);

  const { data } = useCourtDetailData({ courtId: courtId });
  const courtDetail = data?.data;

  useEffect(() => {
    const map2 = new naver.maps.Map("map1", {
      center: new naver.maps.LatLng(
        courtDetail?.latitude,
        courtDetail?.longitude
      ),
      zoom: 13,
      pinchZoom: true,
      scrollWheel: true,
    });

    new naver.maps.Marker({
      position: new naver.maps.LatLng(
        courtDetail?.latitude,
        courtDetail?.longitude
      ),
      map: map2,
      icon: {
        content: `<img src=${marker} alt="marker" />`,
      },
    });
  }, [courtDetail]);
  return (
    <div
      id="map1"
      className="sm:hidden md:block w-[367px] h-[618px] rounded-[1.25rem]"
    ></div>
  );
};

export default DetailMap;
