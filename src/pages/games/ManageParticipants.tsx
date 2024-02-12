import { useNavigate } from "react-router-dom";
import backArrow from "../../assets/Chevron_Left.png";

import {
  UserRefundInfoBox,
  UserRejectInfoBox,
  UserRequestInfoBox,
} from "../../components/game/host/UserRequestInfoBox";

export const ManageParticipants = () => {
  const navigate = useNavigate();

  // const navigatePrev = () => navigate(-1);
  const navigateHome = () => navigate(-1);

  return (
    <div className="h-screen">
      <div className="">
        <button
          role="go-prev-button"
          className="mobile:block tablet:hidden p-4"
          onClick={navigateHome}
        >
          <img src={backArrow} alt="back arrow" className="w-6" />
        </button>
        <div className="pb-4">
          <h4 className="font-bold text-center text-2xl">나의 매치 스케줄</h4>
        </div>

        <hr className="mobile:block tablet:hidden w-full" />
      </div>
      <div className="flex flex-col gap-4 mobile:w-full tablet:w-[560px] tablet:mb-0 mx-auto mobile:mb-[4rem] py-3  ">
        <div className="flex flex-col gap-4 mobile:px-4">
          <h4 className="font-bold text-xl text-[#222]">참여 인원 6/8</h4>
          <div className="flex flex-col gap-2">
            <h4 className="text-lg">참여 확정 게스트</h4>
            <UserRequestInfoBox />
            <UserRequestInfoBox />
            <UserRequestInfoBox />
          </div>
        </div>
        <div className="flex flex-col gap-4 mobile:px-4">
          <div className="flex flex-col gap-2">
            <h4 className="text-lg">참여 확정 게스트</h4>
            <UserRejectInfoBox />
            <UserRejectInfoBox />
            <UserRejectInfoBox />
          </div>
        </div>

        <hr className="h-[8px] w-full bg-gray-200" />

        <div className="flex flex-col gap-4 mobile:px-4">
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-lg">환불 요청 (3)</h4>
            <UserRefundInfoBox />
            <UserRefundInfoBox />
            <UserRefundInfoBox />
          </div>
        </div>
      </div>
    </div>
  );
};
