import { updateParticipationStatus } from "../../../api/gameHost";
import { ParticipantActionsProps } from "../../../interface/gameInterface";

export const UsersRequestingTab = ({
  refetch,
  participantsData,
  phoneFormatter,
}: ParticipantActionsProps) => {
  const handleConfirmToGame = (userId: number) => {
    updateParticipationStatus(participantsData?.data.id, userId);
    refetch();
  };

  return (
    <>
      {participantsData?.data.requested.map((user) => {
        return (
          <div key={user.id} className="flex justify-between text-[14px]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#666]"></div>

              <div className="flex  flex-col ">
                <p> {user.player_name}</p>
                <p className="text-[#666]">
                  {" "}
                  {phoneFormatter(user.player_phone)}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleConfirmToGame(user.id)}
              className="bg-[#4065F6] flex flex-col items-center justify-center w-[48px] h-[40px]  text-white rounded-lg text-[12px] font-bold"
            >
              <span>참여</span>
              <span>확정</span>
            </button>
          </div>
        );
      })}
    </>
  );
};
