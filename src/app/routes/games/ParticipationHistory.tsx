import { NavigateToPrevContainer } from "../../../components/NavigateToPrevContainer";
import { useEffect, useState } from "react";
import useUserDataStore from "../../../store/useUserDataStore";

import { TabFilterList } from "../../../components/game/TabFilterList";
import { useParticipationHistoryInfiniteQuery } from "../../../hooks/games/useParticipationHistoryInfiniteQuery";
import { ParticipateHistorySkeleton } from "../../../components/ui/skeleton/ParticipateHistorySkeleton";
import { useInView } from "react-intersection-observer";
import { GameStatusCard } from "../../../components/ui/cards/GameStatusCard";
import { MatchTags } from "../../../components/game/MatchTags";
import {
  GameCancelledTag,
  GameFinishedTag,
  RecruitingCompletedTag,
  RecruitingTag,
} from "../../../stories/Tags.stories";
import { LoadingPage } from "../LoadingPage";
interface CardDetailField {
  id: number;
  game_status: string;
  title: string;
  startdate: string;
  starttime: string;
  enddate: string;
  endtime: string;
  court: {
    id: 18;
    address: string;
    address_detail: string;
    latitude: string;
    longitude: string;
  };
}

export interface TabField {
  id: number;
  name: string;
}

export const ParticipationHistory = () => {
  const [defaultTabName, setDefaultTabName] = useState("전체 보기");
  const [gameStatusQuery, setGameStatusQuery] = useState("");
  const [openList, setOpenList] = useState(false);
  const { ref, inView } = useInView();

  const handleOpenList = () => setOpenList(!openList);
  const handleChangeTab = (tab: string) => setDefaultTabName(tab);

  const { userId } = useUserDataStore();

  const tabList: TabField[] = [
    { id: 1, name: "모집중" },
    { id: 2, name: "모집 완료" },
    { id: 3, name: "경기 취소" },
    { id: 4, name: "경기 완료" },
    { id: 5, name: "전체 보기" },
  ];

  const {
    data,
    isPending,
    isError,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    refetch,
  } = useParticipationHistoryInfiniteQuery(userId, gameStatusQuery);

  useEffect(() => {
    if (defaultTabName === "전체 보기") {
      setGameStatusQuery("");
    } else if (defaultTabName === "모집중") {
      setGameStatusQuery("open");
    } else if (defaultTabName === "모집 완료") {
      setGameStatusQuery("closed");
    } else if (defaultTabName === "경기 취소") {
      setGameStatusQuery("canceled");
    } else if (defaultTabName === "경기 완료") {
      setGameStatusQuery("completed");
    }
    refetch();
  }, [refetch, defaultTabName, gameStatusQuery]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isPending) {
    return <ParticipateHistorySkeleton title="나의 참여 경기" />;
  }

  if (isError) {
    return <p>Error...{error.message}</p>;
  }
  return (
    <section className="laptop:mt-[69px] mobile:mb-16 mobile:my-0 tablet:px-[80px] laptop:px-0 laptop:h-screen">
      <NavigateToPrevContainer children="나의 호스팅 경기" />

      <div className=" tablet:space-y-8 mobile:m-0 laptop:mt-0">
        <div className="laptop:w-[593px] mx-auto flex justify-between">
          <h1 className="text-[26px] w-full font-bold tablet:block mobile:hidden">
            나의 참여 경기
          </h1>
          <TabFilterList
            tabList={tabList}
            defaultTabName={defaultTabName}
            openList={openList}
            handleOpenList={handleOpenList}
            handleChangeTab={handleChangeTab}
          />
        </div>
        <div
          style={{ scrollbarWidth: "thin" }}
          className=" laptop:w-[593px] bg-[#FBFBFB]  laptop:h-[653px] mobile:h-full   mobile:w-full mx-auto   p-3 rounded-lg flex flex-col gap-10 "
        >
          {isPending && <p>Loading...</p>}
          {isError && <p>Error...</p>}

          <div
            style={{
              overflowY: "auto",
              scrollbarWidth: "thin",
            }}
          >
            {data?.pages.map(
              (content: {
                start_index: number;
                end_index: number;
                current_index: number;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                page_content: any;
              }) => {
                const pageContent = content.page_content;
                return pageContent?.map(
                  (gameInfo: {
                    startdate: string;
                    games: CardDetailField[];
                  }) => (
                    <div key={gameInfo?.startdate} className="space-y-2.5">
                      <h2 className="font-bold ">{gameInfo?.startdate}</h2>
                      {gameInfo?.games?.map((game, gameIdx) => (
                        <div key={gameIdx}>
                          <GameStatusCard
                            key={game.id}
                            path={`/games/detail/${game.id}/${game.title.replace(/\s+/g, "-")}`}
                            game_status={
                              game.game_status === "open" ? (
                                <MatchTags {...RecruitingTag.args} />
                              ) : game.game_status === "canceled" ? (
                                <MatchTags {...GameCancelledTag.args} />
                              ) : game.game_status === "closed" ? (
                                <MatchTags {...RecruitingCompletedTag.args} />
                              ) : game.game_status === "completed" ? (
                                <MatchTags {...GameFinishedTag.args} />
                              ) : null
                            }
                            title={game.title}
                            address={`${game.court.address} ${game.court.address_detail}`}
                            time={`${game.starttime.slice(0, 5)} ~ ${game.endtime.slice(0, 5)}`}
                          />
                        </div>
                      ))}
                    </div>
                  )
                );
              }
            )}
            <button
              ref={ref}
              disabled={!hasNextPage}
              onClick={() => fetchNextPage()}
            >
              {isFetchingNextPage && <LoadingPage />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
