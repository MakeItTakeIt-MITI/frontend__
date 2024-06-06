import { MatchTags } from "../../game/MatchTags";
import markerIcon from "../../../assets/Map_Pin.svg";
import peopleIcon from "../../../assets/people.svg";

import {
  GameCancelledTag,
  GameFinishedTag,
  RecruitingCompletedTag,
  RecruitingTag,
} from "../../../stories/Tags.stories";
import { GameDetailField } from "../../../interface/gameInterface";

interface GameDetailsCardProps {
  data: GameDetailField;
  isPending: boolean;
}

export const GameDetailsCard = ({ data, isPending }: GameDetailsCardProps) => {
  if (isPending) {
    return (
      <div className="w-[453px] h-[170px] p-3 space-y-2 border border-gray-200 rounded-lg"></div>
    );
  }

  return (
    <>
      {data && (
        <div className="w-[453px] h-[170px] p-3 space-y-2 border border-gray-200 rounded-lg">
          {data.game_status === "open" && <MatchTags {...RecruitingTag.args} />}
          {data.game_status === "canceled" && (
            <MatchTags {...GameCancelledTag.args} />
          )}
          {data.game_status === "closed" && (
            <MatchTags {...RecruitingCompletedTag.args} />
          )}
          {data.game_status === "completed" && (
            <MatchTags {...GameFinishedTag.args} />
          )}
          <div className="space-y-1">
            <h1 className="text-neutral-800 text-base font-bold leading-[18px] max-w-[351px] truncate">
              {data.title}
            </h1>

            <p className="text-neutral-400 text-sm font-medium  leading-none">
              {data.startdate} {data.starttime.slice(0, 5)} ~{" "}
              {data.endtime.slice(0, 5)}
            </p>
          </div>

          <div className="text-neutral-700 text-sm font-medium space-y-1">
            <div className="flex gap-1">
              <img src={markerIcon} alt="pin icon" className="" />
              <p>
                {" "}
                {data.court.address} {data.court.address_detail}
              </p>
            </div>
            <div className="flex gap-1">
              <img src={peopleIcon} alt="pin icon" className="" />
              <p>
                {" "}
                총 {data.max_invitation}명 중{" "}
                {data.num_of_confirmed_participations}명 모집 완료
              </p>
            </div>
          </div>

          <h2 className="text-blue-600 text-base font-bold leading-[18px]">
            {" "}
            {data.fee.toLocaleString("ko-KR", {
              style: "currency",
              currency: "KRW",
            })}{" "}
          </h2>
        </div>
      )}
    </>
  );
};
