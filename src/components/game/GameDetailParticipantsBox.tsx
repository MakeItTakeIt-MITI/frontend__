import profile from "../../assets/game_detail_profile.svg";
import {
  ConfirmedParticipation,
  GameDetailBoxProp,
} from "../../interface/gameInterface";

export const GameDetailParticipantsBox = ({
  gameDetail,
}: GameDetailBoxProp) => {
  return (
    <div className="p-3 space-y-2.5  w-full  laptop:border border-gray-200 rounded-lg">
      <h1 className="font-bold">
        참가 완료된 게스트 (
        {gameDetail.num_of_confirmed_participations
          ? gameDetail.num_of_confirmed_participations
          : 0}
        /{gameDetail.max_invitation}){" "}
      </h1>

      <>
        {gameDetail.num_of_confirmed_participations === 0 ? (
          <div className="p-10 w-full   flex items-center justify-center text-[14px] text-[#999]">
            경기의 첫번째 플레이어가 되어보세요!
          </div>
        ) : (
          <div
            className="flex gap-4 overflow-x-auto "
            style={{ scrollbarWidth: "thin", scrollbarColor: "#fff" }}
          >
            {gameDetail.confirmed_participation?.length !== 0 &&
              gameDetail.confirmed_participations?.map(
                (participant: ConfirmedParticipation) => {
                  return (
                    <div
                      key={participant.id}
                      className="flex flex-col items-center gap-1"
                    >
                      <img
                        src={profile}
                        alt="profile icon"
                        className="w-[40px]"
                      />
                      <h2 className="text-[#666] text-[14px]">
                        {participant.nickname}
                      </h2>
                    </div>
                  );
                }
              )}
          </div>
        )}
      </>
    </div>
  );
};
