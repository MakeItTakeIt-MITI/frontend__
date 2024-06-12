/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  GameCancelledTag,
  GameFinishedTag,
  RecruitingCompletedTag,
  RecruitingTag,
} from "../../stories/Tags.stories";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { MatchTags } from "../game/MatchTags";
import { GameStatusCard } from "../ui/cards/GameStatusCard";
import { NoListFoundMessageBox } from "../ui/common/NoListFoundMessageBox";

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
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <div
      ref={ref}
      style={{ overflowY: "auto", scrollbarWidth: "thin" }}
      className="] flex flex-col gap-2.5 overflow-y-auto "
    >
      {data?.pages.map((page: any) =>
        page.data.page_content.length !== 0 ? (
          page.data.page_content.map((newData: any) => (
            <div key={newData.startdate}>
              <h2 className="font-bold">{newData.startdate}</h2>
              <div className="space-y-[15px] ">
                {newData.games.map((detail: any) => (
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
        ) : (
          <NoListFoundMessageBox
            title="경기가 없습니다."
            content="직접 경기를 호스팅해보세요!"
          />
        )
      )}
    </div>
  );
};
