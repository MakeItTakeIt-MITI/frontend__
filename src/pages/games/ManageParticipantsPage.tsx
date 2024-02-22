import { useNavigate, useParams } from "react-router-dom";
import backArrow from "../../assets/Chevron_Left.png";

import { UsersConfirmedTab } from "../../components/game/host/UsersConfirmedTab";
import { UsersRequestingTab } from "../../components/game/host/UsersRequestingTab";
import { UsersRefundTab } from "../../components/game/host/UsersRefundTab";
import { useParticipatingUsersQuery } from "../../hooks/useParticipatingUsersQuery";
import { useGetGameDetailQuery } from "../../hooks/useGetGameDetailQuery";

export const ManageParticipantsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const gameIdParam = Number(id);

  const { refetch, data: participantsData } =
    useParticipatingUsersQuery(gameIdParam);

  const { data: gameDetailData } = useGetGameDetailQuery(gameIdParam);

  const navigateHome = () => navigate(-1);

  function phoneFormatter(number: string) {
    const cleanedNumber = number.replace(/\D/g, "");
    const formattedNumber = `010-${cleanedNumber.slice(
      3,
      7
    )}-${cleanedNumber.slice(7)}`;

    return formattedNumber;
  }

  return (
    <div className="h-screen">
      <div className="mobile:block tablet:hidden">
        <button role="go-prev-button" className=" p-4" onClick={navigateHome}>
          <img src={backArrow} alt="back arrow" className="w-6" />
        </button>
        <div className="pb-4">
          <h4 className="font-bold text-center text-2xl">나의 매치 스케줄</h4>
        </div>

        <hr className="mobile:block tablet:hidden w-full" />
      </div>

      <div className="flex flex-col gap-4 w-full tablet:px-[13rem] tablet:max-w-[90rem]  tablet:mb-0 mx-auto mobile:mb-[4rem] py-3  ">
        {/* <hr className="mobile:hidden tablet:block w-full" /> */}
        <h4 className="font-bold text-2xl text-[#222] mobile:hidden tablet:block">
          나의 매치 스케줄
        </h4>
        <h4 className="font-bold mobile:text-xl tablet:text-lg  text-[#222] tablet:p-0 mobile:px-4 ">
          참여 인원 {participantsData?.data.confirmed.length} /{" "}
          {gameDetailData?.data.max_invitation}
        </h4>
        {/* <hr className="mobile:hidden tablet:block w-full" /> */}

        <div className=" flex  mobile:flex-col tablet:flex-row mobile:gap-4 tablet:justify-between">
          <div className="flex flex-col gap-4 mobile:px-4 w-full tablet:p-4">
            <div className="flex flex-col tablet:gap-4 mobile:gap-2">
              <h4 className="text-lg tablet:text-center mobile:text-start">
                참여 확정 게스트
              </h4>
              <UsersConfirmedTab
                refetch={refetch}
                participantsData={participantsData}
                phoneFormatter={phoneFormatter}
              />
            </div>
          </div>
          <hr className="h-screen w-1 h bg-gray-200 mobile:hidden tablet:block" />

          <div className="flex flex-col gap-4 mobile:px-4 w-full  tablet:p-4">
            <div className="flex flex-col tablet:gap-4 mobile:gap-2">
              <h4 className="text-lg tablet:text-center mobile:text-start">
                참여 요청 게스트
              </h4>
              <UsersRequestingTab
                refetch={refetch}
                participantsData={participantsData}
                phoneFormatter={phoneFormatter}
              />
            </div>
          </div>
          <hr className="h-screen w-1 h bg-gray-200 mobile:hidden tablet:block" />

          <hr className="h-[8px] w-full bg-gray-200 mobile:block tablet:hidden" />

          <div className="flex flex-col gap-4 mobile:px-4 w-full  tablet:p-4">
            <div className="flex flex-col tablet:gap-4 mobile:gap-2 ">
              <h4 className="mobile:font-bold  text-lg tablet:text-center mobile:text-start">
                환불 요청 (3)
              </h4>
              <UsersRefundTab
                participantsData={participantsData}
                phoneFormatter={phoneFormatter}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
