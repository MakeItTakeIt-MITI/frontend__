import { useConfirmParticipantMutation } from "../../../hooks/useUpdateParticipantStatusMutation";
import { ParticipantActionProps } from "../../../interface/participant_types";
import profile from "../../../assets/profile_circle (1).svg";

export const UsersRequestingTab = ({
  refetch,
  participantsData,
}: ParticipantActionProps) => {
  const gameId = participantsData?.data.id;

  const { mutate: approveMutate, isError } =
    useConfirmParticipantMutation(gameId);

  const handleConfirmToGame = (userId: number) => {
    approveMutate(userId, {
      onSuccess: () => {
        refetch();
      },
    });
  };

  if (isError) {
    console.log("Error..");
  }

  return (
    <>
      {participantsData?.data.requested.map((user) => {
        return (
          <div key={user.id} className="flex justify-between text-[14px]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full">
                <img src={profile} alt="profile icon" className="w-full" />
              </div>

              <div className="flex  flex-col ">
                <p> {user.player_account_holder} 님</p>
                <p className="text-[#666]">{user.player.email}</p>
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
