import { useNavigate, useParams } from "react-router-dom";
import backArrow from "../../assets/Chevron_Left.png";

import {
  UserRefundInfoBox,
  UserRejectInfoBox,
  UserRequestInfoBox,
} from "../../components/game/host/UserRequestInfoBox";
import { useParticipatingUsersQuery } from "../../hooks/useParticipatingUsersQuery";
import { UserRequestActionButton } from "../../components/game/host/UserRequestActionButton";
import {
  ApproveUserButton,
  CopyBankInfoButton,
  RejectUserButton,
} from "../../stories/UserRequestAction.stories";

export const ManageParticipants = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const gameIdParam = Number(id);

  const { data: participantsData } = useParticipatingUsersQuery(gameIdParam);
  console.log(participantsData?.data);

  // const navigatePrev = () => navigate(-1);
  const navigateHome = () => navigate(-1);

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
        <h4 className="font-bold text-2xl text-[#222] text-center mobile:hidden tablet:block">
          나의 매치 스케줄
        </h4>
        <h4 className="font-bold text-xl  text-[#222] mobile:px-4 mobile:text-start tablet:text-center">
          참여 인원 6/8
        </h4>
        {/* <hr className="mobile:hidden tablet:block w-full" /> */}

        <div className=" flex mobile:flex-col tablet:flex-row mobile:gap-4 tablet:justify-between">
          <div className="flex flex-col gap-4 mobile:px-4 tablet:w-[30%]">
            <div className="flex flex-col tablet:gap-4 mobile:gap-2">
              <h4 className="text-lg tablet:text-center mobile:text-start">
                참여 확정 게스트
              </h4>
              <UserRequestInfoBox />
              {participantsData?.data.confirmed.map((user) => {
                return (
                  <div
                    key={user.id}
                    className="flex justify-between text-[14px]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#666]"></div>

                      <div className="flex  flex-col ">
                        <p> {user.player_name}</p>
                        <p className="text-[#666]">{user.player_phone}</p>
                      </div>
                    </div>
                    <UserRequestActionButton {...ApproveUserButton.args} />
                  </div>
                );
              })}
            </div>
          </div>
          <hr className="h-screen w-1 h bg-gray-200 mobile:hidden tablet:block" />

          <div className="flex flex-col gap-4 mobile:px-4 tablet:w-[30%]">
            <div className="flex flex-col tablet:gap-4 mobile:gap-2">
              <h4 className="text-lg tablet:text-center mobile:text-start">
                참여 요청 게스트
              </h4>
              {participantsData?.data.requested.map((user) => {
                return (
                  <div
                    key={user.id}
                    className="flex justify-between text-[14px]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#666]"></div>

                      <div className="flex  flex-col ">
                        <p> {user.player_name}</p>
                        <p className="text-[#666]">{user.player_phone}</p>
                      </div>
                    </div>
                    <UserRequestActionButton {...RejectUserButton.args} />
                  </div>
                );
              })}
              {/* <UserRejectInfoBox participantsData={participantsData} /> */}
              {/* <UserRejectInfoBox />
              <UserRejectInfoBox />
              <UserRejectInfoBox />
              <UserRejectInfoBox /> */}
            </div>
          </div>
          <hr className="h-screen w-1 h bg-gray-200 mobile:hidden tablet:block" />

          <hr className="h-[8px] w-full bg-gray-200 mobile:block tablet:hidden" />

          <div className="flex flex-col gap-4 mobile:px-4 tablet:w-[40%]">
            <div className="flex flex-col tablet:gap-4 mobile:gap-2 ">
              <h4 className="mobile:font-bold  text-lg tablet:text-center mobile:text-start">
                환불 요청 (3)
              </h4>
              <UserRefundInfoBox />
              {participantsData?.data.refund_requested.map((user) => {
                return (
                  <div
                    key={user.id}
                    className="flex justify-between text-[14px]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#666]"></div>

                      <div className="flex  flex-col ">
                        <p> {user.player_name}</p>
                        <p className="text-[#666]">{user.player_phone}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <UserRequestActionButton {...CopyBankInfoButton.args} />
                      <UserRequestActionButton {...RejectUserButton.args} />
                    </div>{" "}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
