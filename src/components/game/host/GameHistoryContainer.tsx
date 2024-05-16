import { Link } from "react-router-dom";
import rightArrow from "../../../assets/Chevron_Right_MD.svg";
import { MatchTags } from "../MatchTags";
import {
  GameCancelledTag,
  GameFinishedTag,
  RecruitingCompletedTag,
  RecruitingTag,
} from "../../../stories/Tags.stories";
import {
  GameDetailField,
  GameHostHistoryField,
} from "../../../interface/gameInterface";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface GameHistoryProps {
  data: any;
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

export const GameHistoryContainer: React.FC<GameHistoryProps> = ({
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
      className="flex flex-col gap-2.5 "
    >
      {data &&
        data.pages.map(
          (page: any) =>
            page.page_content &&
            page.page_content.map((newData: GameHostHistoryField) => (
              <div key={newData.startdate}>
                <h2 className="font-bold">{newData?.startdate}</h2>
                <div className="space-y-[15px]">
                  {newData.games.map((detail: GameDetailField) => (
                    <Link
                      key={detail?.id}
                      to={`/games/detail/${detail?.id}`}
                      className="flex gap-2.5 justify-between items-center p-2 text-xs font-medium    bg-white rounded-lg border border-gray-200 border-solid max-w-[551px] text-neutral-400 "
                    >
                      <div className="flex flex-col justify-center h-full ">
                        {detail?.game_status === "open" && (
                          <MatchTags {...RecruitingTag.args} />
                        )}
                        {detail?.game_status === "canceled" && (
                          <MatchTags {...GameCancelledTag.args} />
                        )}
                        {detail?.game_status === "closed" && (
                          <MatchTags {...RecruitingCompletedTag.args} />
                        )}
                        {detail?.game_status === "completed" && (
                          <MatchTags {...GameFinishedTag.args} />
                        )}
                        <div className="mt-1.5 text-base font-bold leading-5 text-ellipsis text-zinc-800 max-md:max-w-full">
                          {detail?.title}
                        </div>
                        <div className="mt-1.5 text-ellipsis max-md:max-w-full">
                          {detail?.court.address}
                        </div>
                        <div className="text-ellipsis max-md:max-w-full">
                          10:00 ~ 13:00
                        </div>
                      </div>
                      <img loading="lazy" src={rightArrow} alt="right arrow" />
                    </Link>
                  ))}
                </div>
              </div>
            ))
        )}

      {/* <button
        onClick={() => fetchNextPage()}
        className="bg-blue-200 text-white w-full"
      >
        Fetch more
      </button> */}
    </div>
  );
};
