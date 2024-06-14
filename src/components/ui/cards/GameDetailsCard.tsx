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
}

export const GameDetailsCard = ({ data }: GameDetailsCardProps) => {
  const status = data.game_status;
  const title = data.title;
  const start_date = data.startdate;
  const start_time = data.starttime.slice(0, 5);
  const end_time = data.endtime.slice(0, 5);
  const address = data.court.address;
  const address_detail = data.court.address_detail;
  const max_invitation = data.max_invitation;
  const confirmed_participants = data.num_of_confirmed_participations;
  const fee = data.fee.toLocaleString("ko-KR", {
    style: "currency",
    currency: "KRW",
  });
  return (
    <>
      {data && (
        <div className="laptop:w-[453px] mobile:w-full tablet:w-full h-[170px] p-3 space-y-2 border border-gray-200 rounded-lg">
          {status === "open" && <MatchTags {...RecruitingTag.args} />}
          {status === "canceled" && <MatchTags {...GameCancelledTag.args} />}
          {status === "closed" && (
            <MatchTags {...RecruitingCompletedTag.args} />
          )}
          {status === "completed" && <MatchTags {...GameFinishedTag.args} />}
          <div className="space-y-1">
            <h1 className="text-neutral-800 text-base font-bold leading-[18px] max-w-[351px] truncate">
              {title}
            </h1>

            <p className="text-neutral-400 text-sm font-medium  leading-none">
              {start_date} {start_time} ~ {end_time}
            </p>
          </div>

          <div className="text-neutral-700 text-sm font-medium space-y-1">
            <div className="flex gap-1">
              <img src={markerIcon} alt="pin icon" className="" />
              <p>
                {address} {address_detail}
              </p>
            </div>
            <div className="flex gap-1">
              <img src={peopleIcon} alt="pin icon" className="" />
              <p>
                총 {max_invitation}명 중 {confirmed_participants}명 모집 완료
              </p>
            </div>
          </div>

          <h2 className="text-blue-600 text-base font-bold leading-[18px]">
            {fee}
          </h2>
        </div>
      )}
    </>
  );
};
