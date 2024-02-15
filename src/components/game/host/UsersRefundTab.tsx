import { UserRequestActionButton } from "./UserRequestActionButton";
import {
  ApproveUserButton,
  CopyBankInfoButton,
  RejectUserButton,
} from "../../../stories/UserRequestAction.stories";
import { updateParticipationStatus } from "../../../api/gameHost";

export const UsersRefundTab = ({ refetch, participantsData }) => {
  const handleConfirmToGame = (userId: number) => {
    updateParticipationStatus(participantsData?.data.id, userId);
    refetch();
  };

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었습니다.");
    } catch (e) {
      alert("복사에 실패하였습니다");
    }
  };

  return (
    <>
      {participantsData?.data.cancelled.map((user) => {
        return (
          <div key={user.id} className="flex justify-between text-[14px]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#666]"></div>

              <div className="flex  flex-col ">
                <p>{user.player_name}</p>
                <p className="text-[#666]">010-2592-2414</p>
              </div>
            </div>
            <div className="flex gap-2">
              <UserRequestActionButton
                handleCopyClipBoard={() =>
                  handleCopyClipBoard(user.player_account_number)
                }
                {...CopyBankInfoButton.args}
              />
              {/* <UserRequestActionButton
                handleConfirmToGame={() => handleConfirmToGame(user.id)}
                {...ApproveUserButton.args}
              /> */}
            </div>
          </div>
        );
      })}
    </>
  );
};
