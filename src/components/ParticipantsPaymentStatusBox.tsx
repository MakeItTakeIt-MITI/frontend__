import { GameDetailBoxProp } from "./GameDetailBox";
import { UserPaymentStatusBox } from "./UserPaymentStatusBox";

export interface PlayerDetailField {
  id: number;
  nickname: string;
  fee: number;
  isSettled?: boolean;
}

export const ParticipantsPaymentStatusBox = ({
  detailData,
}: GameDetailBoxProp) => {
  return (
    <div
      style={{ scrollbarWidth: "thin" }}
      className="overflow-y-auto w-[453px] h-[686px]  p-3 bg-white rounded-lg border border-gray-200 justify-start items-start gap-3 inline-flex"
    >
      <div className="w-[411px] flex-col justify-start items-start inline-flex">
        <div className="w-[412px] px-3 pt-3 pb-5 bg-white rounded-lg border-b border-gray-200 justify-start items-start gap-2.5 inline-flex">
          <div className="text-neutral-800 text-base font-bold font-['Pretendard'] leading-[18px]">
            참여자 정산 정보
          </div>
        </div>
        <div className=" h-full">
          {detailData?.data.participations.map((player: PlayerDetailField) => {
            return <UserPaymentStatusBox key={player.id} player={player} />;
          })}
        </div>
      </div>
    </div>
  );
};
