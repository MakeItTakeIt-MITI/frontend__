import rightArrow from "../../../assets/Chevron_Down_MD.svg";
import { ParticipantCard } from "./ParticipantCard";

export const MatchInfoParticipantsBox = () => {
  return (
    <>
      <hr className="h-[8px] w-full bg-gray-200" />

      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between">
          <h4 className="font-bold">참가 인원 관리</h4>
          <button>
            <img src={rightArrow} alt="right arrow" className="-rotate-90" />
          </button>
        </div>
        <div className="text-[14px]">
          <h4 className="text-[#222] font-bold">참가 현황</h4>
          <p className="text-[#666]">
            총 모집 인원 8명, 결제 및 참가 완료 6명, 모집 중 2명
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <h4 className="text-[14px] text-[#222] font-bold">
            결제 및 참가 완료된 게스트 (6)
          </h4>
          <div className="flex items-center gap-4">
            <ParticipantCard />
            <ParticipantCard />
            <ParticipantCard />
            <ParticipantCard />
            <ParticipantCard />
            <ParticipantCard />
            <ParticipantCard />
            <ParticipantCard />
            <ParticipantCard />
            <ParticipantCard />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <h4 className="text-[14px] text-[#222] font-bold">
            결제 예정인 게스트 (4)
          </h4>
          <div className="flex items-center gap-4">
            <ParticipantCard />
            <ParticipantCard />
            <ParticipantCard />
            <ParticipantCard />
          </div>
        </div>
      </div>
    </>
  );
};
