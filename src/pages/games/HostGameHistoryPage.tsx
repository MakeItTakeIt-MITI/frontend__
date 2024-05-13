import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import downarrow from "../../assets/Chevron_Down_MD.svg";
import { useEffect, useState } from "react";
import useUserDataStore from "../../store/useUserDataStore";
import { useHostHistoryInfiniteQuery } from "../../hooks/games/useHostHistoryInfiniteQuery";

import { LoadingPage } from "../LoadingPage";
import { HostGameHistoryContainer } from "../../components/game/host/HostGameHistoryContainer";

export const HostGameHistoryPage = () => {
  const [defaultTabName, setDefaultTabName] = useState("전체 보기");
  const [gameStatusQuery, setGameStatusQuery] = useState("");
  const [openList, setOpenList] = useState(false);

  const handleOpenList = () => setOpenList(!openList);
  const handleChangeTab = (tab: string) => setDefaultTabName(tab);

  const { userId } = useUserDataStore();

  const {
    data: historyData,
    status,
    error,
    fetchNextPage,

    hasNextPage,
    refetch,
  } = useHostHistoryInfiniteQuery(userId, gameStatusQuery);
  console.log(historyData);

  const tabList = [
    { id: 1, name: "모집중" },
    { id: 2, name: "모집 완료" },
    { id: 3, name: "경기 취소" },
    { id: 4, name: "경기 완료" },
    { id: 5, name: "전체 보기" },
  ];

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

  if (status === "pending") {
    return <LoadingPage />;
  }

  if (status === "error") {
    return <p>Error...{error.message}</p>;
  }
  return (
    <section className="laptop:my-[69px] mobile:my-0">
      <NavigateToPrevContainer children="나의 호스팅 경기" />

      <div
        style={{ scrollbarWidth: "thin" }}
        className="relative laptop:w-[500px]  laptop:h-[735px] mobile:h-full   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-8 laptop:px-9 mobile:px-4 py-9 rounded-lg flex flex-col gap-10 "
      >
        <div className="flex justify-between">
          <h1 className="text-[26px] w-full font-bold laptop:block mobile:hidden">
            나의 호스팅 경기
          </h1>
          {/* tab */}
          <div className="flex justify-end w-full ">
            <div
              onClick={handleOpenList}
              style={{
                borderRadius: !openList ? "8px 8px 8px 8px" : "8px 8px 0px 0px",
              }}
              className="flex items-center  w-[90px] h-[32px] py-2.5 px-1.5 bg-[#f7f7f7]  relative hover:cursor-pointer"
            >
              <p className="text-[14px]">{defaultTabName}</p>
              <img
                src={downarrow}
                alt="open tab icon"
                style={{ rotate: openList ? "180deg" : "0deg" }}
              />

              {openList && (
                <ul className="absolute left-0 top-8 w-full bg-[#f7f7f7] text-[#969696] text-[14px]  px-2 py-1 flex flex-col gap-1 rounded-br-lg">
                  {tabList.map((tab) => {
                    return (
                      <li
                        onClick={() => handleChangeTab(tab.name)}
                        className="hover:cursor-pointer"
                        key={tab.id}
                      >
                        {tab.name}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
        <HostGameHistoryContainer
          historyData={historyData}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
        />
      </div>
    </section>
  );
};
