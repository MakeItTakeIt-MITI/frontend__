import { NavigateToPrevContainer } from "../../../components/NavigateToPrevContainer";
import { useEffect, useState } from "react";
import useUserDataStore from "../../../store/useUserDataStore";
import { useHostHistoryInfiniteQuery } from "../../../hooks/games/useHostHistoryInfiniteQuery";

import { GameHistoryContainer } from "../../../components/game/host/GameHistoryContainer";
import { TabFilterList } from "../../../components/game/TabFilterList";
import { NotFoundPage } from "../NotFoundPage";
import { ParticipateHistorySkeleton } from "../../../components/ui/skeleton/ParticipateHistorySkeleton";

export const GameHostingHistory = () => {
  const [defaultTabName, setDefaultTabName] = useState("전체 보기");
  const [gameStatusQuery, setGameStatusQuery] = useState("");
  const [openList, setOpenList] = useState(false);

  const handleOpenList = () => setOpenList(!openList);
  const handleChangeTab = (tab: string) => setDefaultTabName(tab);

  const { userId } = useUserDataStore();

  const tabList = [
    { id: 1, name: "모집중" },
    { id: 2, name: "모집 완료" },
    { id: 3, name: "경기 취소" },
    { id: 4, name: "경기 완료" },
    { id: 5, name: "전체 보기" },
  ];

  const {
    data: historyData,
    isPending,
    isError,

    fetchNextPage,

    hasNextPage,
    refetch,
  } = useHostHistoryInfiniteQuery(userId, gameStatusQuery);

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

  if (isPending) {
    return <ParticipateHistorySkeleton title="나의 호스팅 경기" />;
  }

  if (isError) {
    return <NotFoundPage />;
  }
  return (
    <section className="laptop:my-[69px] mobile:mb-16 mobile:my-0 tablet:px-[80px] laptop:px-0">
      <NavigateToPrevContainer children="나의 호스팅 경기" />

      <div className=" tablet:space-y-8 mobile:m-0 laptop:mt-0">
        <div className="laptop:w-[593px] mobile:w-full mx-auto flex justify-between">
          <h1 className="text-[26px] w-full font-bold tablet:block mobile:hidden">
            나의 호스팅 경기
          </h1>
          {/* tab */}
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
          <GameHistoryContainer
            data={historyData}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
          />
        </div>
      </div>
    </section>
  );
};
