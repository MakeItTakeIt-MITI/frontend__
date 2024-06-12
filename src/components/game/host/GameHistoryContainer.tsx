/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { GameStatusCard } from "../../ui/cards/GameStatusCard";

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
  }, [inView, fetchNextPage, hasNextPage]);
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
                    <GameStatusCard
                      key={detail.id}
                      path={`/games/detail/${detail.id}`}
                      game_status={
                        detail.game_status === "open" ? (
                          <MatchTags {...RecruitingTag.args} />
                        ) : detail.game_status === "canceled" ? (
                          <MatchTags {...GameCancelledTag.args} />
                        ) : detail.game_status === "closed" ? (
                          <MatchTags {...RecruitingCompletedTag.args} />
                        ) : detail.game_status === "completed" ? (
                          <MatchTags {...GameFinishedTag.args} />
                        ) : null
                      }
                      title={detail.title}
                      address={`${detail.court.address} ${detail.court.address_detail}`}
                      time={`${detail.starttime.slice(0, 5)} ~ ${detail.endtime.slice(0, 5)}`}
                    />
                  ))}
                </div>
              </div>
            ))
        )}
    </div>
  );
};
