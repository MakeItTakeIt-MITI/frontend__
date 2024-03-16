import { RemoveActionProps } from "../../../interface/participant_types";
import profile from "../../../assets/profile_circle (1).svg";

export const UsersRefundTab = ({ participantsData }: RemoveActionProps) => {
  const handleCopyClipBoard = async (accNumber: string) => {
    try {
      await navigator.clipboard.writeText(accNumber);
      alert("클립보드에 계좌번호가 복사되었습니다.");
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
              <div className="w-10 h-10 rounded-full">
                <img src={profile} alt="profile icon" className="w-full" />
              </div>
              <div className="flex  flex-col ">
                <p> {user.player_account_holder} 님</p>
                <p className="text-[#666]">{user.player.email}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  handleCopyClipBoard(
                    `${user.player_account_bank} ${user.player_account_number}`
                  )
                }
                className="bg-[#3BDE87] flex flex-col items-center justify-center w-[48px] h-[40px]  text-white rounded-lg text-[12px] font-bold"
              >
                <span>계좌</span>
                <span>복사</span>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
