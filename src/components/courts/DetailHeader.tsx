import { useParams } from "react-router-dom";
import { useCourtDetailData } from "../../hooks/useCourtDetailData";

const DetailHeader = () => {
  const { id } = useParams();
  const courtId = Number(id);

  const { data } = useCourtDetailData({ courtId: courtId });
  const courtDetail = data?.data;

  return (
    <div className="w-full md:h-[12rem] sm:rounded-none md:rounded-[20px] sm:space-y-5 md:space-y-[1.25rem] bg-dark-card sm:p-5 md:p-6 sm:border-none md:border border-[#525252]">
      <div className="space-y-[0.5rem]">
        <h1 className="text-primary-white font-bold text-[18px]">
          {courtDetail?.name}
        </h1>
        <p className="text-sm font-[500] text-[#A3A3A3]">
          {courtDetail?.address} {courtDetail?.address_detail}
        </p>
      </div>
      <p className="text-primary-white text-sm font-[400]">
        {courtDetail?.info}
      </p>
    </div>
  );
};

export default DetailHeader;
