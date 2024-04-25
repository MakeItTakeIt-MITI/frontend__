import profile from "../../assets/game_detail_profile.svg";
import { GameDetailBoxProp } from "../../interface/gameInterface";

export const GameDetailParticipantsBox = ({
  gameDetail,
}: GameDetailBoxProp) => {
  return (
    <div className="p-3 space-y-2.5 h-[116px]">
      <h1 className="font-bold">
        참가 완료된 게스트 (
        {gameDetail.confimed_participations
          ? gameDetail.confimed_participations
          : 0}
        /{gameDetail.max_invitation}){" "}
      </h1>
      <div
        className="flex gap-4 overflow-x-scroll "
        style={{ scrollbarWidth: "thin", scrollbarColor: "#fff" }}
      >
        {/* {/* <div className="flex flex-col gap-1">
          <img src={profile} alt="profile icon" className="w-[40px]" />
          <h2 className="text-[#666] text-[14px]">name</h2>
        </div> */}
        <div className="flex flex-col items-center gap-1">
          <img src={profile} alt="profile icon" className="w-[40px]" />
          <h2 className="text-[#666] text-[14px]">지원</h2>
        </div>
      </div>
    </div>
  );
};
