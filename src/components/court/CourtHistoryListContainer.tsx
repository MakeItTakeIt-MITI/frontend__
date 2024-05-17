import { Link } from "react-router-dom";
import rightArrow from "../../assets/Chevron_Right_MD.svg";
import {
  GameCancelledTag,
  GameFinishedTag,
  RecruitingCompletedTag,
  RecruitingTag,
} from "../../stories/Tags.stories";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { MatchTags } from "../game/MatchTags";

interface CourtHistoryProp {
  data: any;
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

export const CourtHistoryListContainer: React.FC<CourtHistoryProp> = ({
  data,
  fetchNextPage,
  hasNextPage,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <div
      ref={ref}
      style={{ overflowY: "auto", scrollbarWidth: "thin" }}
      className=" flex flex-col gap-2.5 "
    >
      {data?.pages.map((page) =>
        page.data.page_content.map((newData) => (
          <div key={newData.startdate}>
            <h2 className="font-bold">{newData.startdate}</h2>
            <div className="space-y-[15px]">
              {newData.games.map((detail) => (
                <Link
                  key={detail.id}
                  to={`/games/detail/${detail.id}`}
                  className="flex gap-2.5 justify-between items-center p-2 text-xs font-medium bg-white rounded-lg border border-gray-200 border-solid max-w-[551px] text-neutral-400"
                >
                  <div className="flex flex-col justify-center h-full">
                    {detail.game_status === "open" && (
                      <MatchTags {...RecruitingTag.args} />
                    )}
                    {detail.game_status === "canceled" && (
                      <MatchTags {...GameCancelledTag.args} />
                    )}
                    {detail.game_status === "closed" && (
                      <MatchTags {...RecruitingCompletedTag.args} />
                    )}
                    {detail.game_status === "completed" && (
                      <MatchTags {...GameFinishedTag.args} />
                    )}
                    <div className="mt-1.5 text-base font-bold leading-5 text-ellipsis text-zinc-800 max-md:max-w-full">
                      {detail.title}
                    </div>
                    <div className="mt-1.5 text-ellipsis max-md:max-w-full">
                      {detail.court.address}
                    </div>
                    <div className="text-ellipsis max-md:max-w-full">
                      {`${detail.starttime} ~ ${detail.endtime}`}
                    </div>
                  </div>
                  <img loading="lazy" src={rightArrow} alt="right arrow" />
                </Link>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};
