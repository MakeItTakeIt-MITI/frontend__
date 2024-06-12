import markerSvg from "../assets/Map_Pin.svg";
import peopleSvg from "../assets/people.svg";
import { GameDetailField } from "../interface/gameInterface";
import {
  AwaitingPayment,
  PaymentPartiallyFulfilled,
  TransferFulfilled,
} from "../stories/Tags.stories";
import { MatchTags } from "./game/MatchTags";

export interface GameDetailBoxProp {
  detailData: GameDetailField;
}

export const GameDetailBox = ({ detailData }: GameDetailBoxProp) => {
  return (
    <div className="w-[453px] p-3 space-y-3 border border-gray-200  rounded-lg ">
      {detailData.data.status === "waiting" && (
        <MatchTags {...AwaitingPayment.args} />
      )}
      {detailData.data.status === "confirmed" && (
        <MatchTags {...TransferFulfilled.args} />
      )}
      {detailData.data.status === "partial_completed" && (
        <MatchTags {...PaymentPartiallyFulfilled.args} />
      )}

      <div>
        <p className="text-neutral-800 text-base font-bold">
          {detailData.data.game.title}
        </p>
        <p className="text-neutral-400 text-sm font-medium">
          {detailData.data.game.startdate} {detailData.data.game.starttime} ~{" "}
          {detailData.data.game.endtime}
        </p>
      </div>
      <div>
        <div className="flex items-center gap-1">
          <img src={markerSvg} alt="marker" />
          <p className="text-neutral-700 text-sm font-medium">
            {detailData.data.game.court.address}{" "}
            {detailData.data.game.court.address_detail}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <img src={peopleSvg} alt="people icon" />
          <p className="text-neutral-700 text-sm font-medium">
            총 {detailData.data.game.max_invitation}명중{" "}
            {detailData.data.game.num_of_confirmed_participations}명 모집 완료
          </p>
        </div>
      </div>
      <div className=" text-blue-600 text-base font-bold leading-[18px]">
        {detailData.data.game.fee.toLocaleString("ko-KR", {
          style: "currency",
          currency: "KRW",
        })}
      </div>
    </div>
  );
};
