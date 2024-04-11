import { Link, useParams } from "react-router-dom";
import rightArrow from "../../../assets/Chevron_Down_MD.svg";
import { ParticipantCard } from "./ParticipantCard";
import { useParticipatingUsersQuery } from "../../../hooks/games/useParticipatingUsersQuery";
import { ParticipantField } from "../../../interface/gameInterface";
import { useGetGameDetailQuery } from "../../../hooks/games/useGetGameDetailQuery";

export const MatchInfoParticipantsBox = () => {
  const { id } = useParams();
  const gameIdParam = Number(id);

  const { data: gameData } = useGetGameDetailQuery(gameIdParam);
  const { data: participantsData } = useParticipatingUsersQuery(gameIdParam);

  return (
    <>
      <hr className="h-[8px] w-full bg-gray-200 tablet:hidden mobile:block" />

      <div className="flex flex-col gap-4 p-4 ">
        <div className="flex justify-between">
          <h4 className="font-bold">참가 인원 관리</h4>
          <Link to={`manage_participants`}>
            <img src={rightArrow} alt="right arrow" className="-rotate-90" />
          </Link>
        </div>
        <div className="text-[14px]">
          <h4 className="text-[#222] font-bold">참가 현황</h4>
          <p className="text-[#666]">
            총 모집 인원 {gameData?.data.max_invitation}명, 결제 및 참가 완료{" "}
            {""}
            {participantsData?.data.confirmed.length}명, 모집 중{" "}
            {gameData?.data.max_invitation -
              gameData?.data.confimed_participations}
            명
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <h4 className="text-[14px] text-[#222] font-bold">
            결제 및 참가 완료된 게스트 (
            {participantsData?.data.confirmed.length})
          </h4>
          <div className="flex items-center gap-4 tablet:flex-wrap tablet:overflow-x-hidden mobile:overflow-x-scroll">
            {participantsData?.data.confirmed.map((user: ParticipantField) => {
              return <ParticipantCard user={user} />;
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <h4 className="text-[14px] text-[#222] font-bold">
            결제 예정인 게스트 ({participantsData?.data.requested.length})
          </h4>
          <div className="flex items-center gap-4">
            {participantsData?.data.requested.map((user: ParticipantField) => {
              return <ParticipantCard user={user} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
