import { AwaitingPayment, TransferFulfilled } from "../stories/Tags.stories";
import { PlayerDetailField } from "./ParticipantsPaymentStatusBox";
import { MatchTags } from "./game/MatchTags";

interface PlayerDetailProps {
  player: PlayerDetailField;
}

export const UserPaymentStatusBox = ({ player }: PlayerDetailProps) => {
  return (
    <div className="w-[412px]  px-5 py-[15px] bg-white rounded-lg border-b border-gray-200 justify-between items-center flex">
      <div className="w-[87px] truncate text-neutral-400 text-xs font-normal font-['Pretendard'] leading-[14px]">
        {player.nickname}
      </div>
      <div className="w-[131px]  text-blue-600 text-base font-bold font-['Pretendard'] leading-[18px]">
        {player.fee.toLocaleString("ko-KR", {
          style: "currency",
          currency: "KRW",
        })}
      </div>
      <div className=" ">
        {player.isSettled === false ? (
          <MatchTags {...AwaitingPayment.args} />
        ) : (
          <MatchTags {...TransferFulfilled.args} />
        )}
      </div>
    </div>
  );
};
