import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import downarrow from "../../assets/Chevron_Down_MD.svg";
import { useEffect, useState } from "react";
import useUserDataStore from "../../store/useUserDataStore";
import { useGetHostHistoryQuery } from "../../hooks/games/useGetHostHistoryQuery";
import { LoadingPage } from "../LoadingPage";
import { MatchTags } from "../../components/game/MatchTags";
import rightArrow from "../../assets/Chevron_Right_MD.svg";
import {
  GameCancelledTag,
  GameFinishedTag,
  RecruitingCompletedTag,
  RecruitingTag,
} from "../../stories/Tags.stories";
import { Link } from "react-router-dom";
import {
  GameDetailField,
  GameHostHistoryField,
} from "../../interface/gameInterface";
import { NotFoundPage } from "../NotFoundPage";

export const HostGameHistoryPage = () => {
  const [defaultTabName, setDefaultTabName] = useState("전체 보기");
  const [gameStatusQuery, setGameStatusQuery] = useState("");
  const [openList, setOpenList] = useState(false);

  const handleOpenList = () => setOpenList(!openList);
  const handleChangeTab = (tab: string) => setDefaultTabName(tab);

  const { userId } = useUserDataStore();

  const {
    data: hostHistory,
    refetch,
    isPending,
    isError,
  } = useGetHostHistoryQuery(userId, 1, gameStatusQuery);
  const gameData = hostHistory?.data.page_content;

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

  if (isPending) {
    return <LoadingPage />;
  }

  if (isError) {
    return <NotFoundPage />;
  }
  return (
    <section className="laptop:my-[69px] mobile:my-0">
      <NavigateToPrevContainer children="나의 호스팅 경기" />

      <div className="relative laptop:w-[500px]  laptop:min-h-[735px] mobile:h-full   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-8 laptop:px-9 mobile:px-4 py-9 rounded-lg flex flex-col gap-10 ">
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

        <div className="flex flex-col gap-2.5">
          {gameData.map((game: GameHostHistoryField) => {
            return (
              <div key={game.id} className="flex flex-col gap-2">
                <h2 className="font-bold">{game?.startdate}</h2>
                <div className="space-y-[15px]">
                  {game?.games.map((detail: GameDetailField) => {
                    return (
                      <Link
                        key={detail.id}
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
                            서울특별시 한국동 한국로 123-456
                          </div>
                          <div className="text-ellipsis max-md:max-w-full">
                            10:00 ~ 13:00
                          </div>
                        </div>
                        <img loading="lazy" src={rightArrow} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
