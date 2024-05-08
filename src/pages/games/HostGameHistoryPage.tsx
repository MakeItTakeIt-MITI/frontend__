import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import downarrow from "../../assets/Chevron_Down_MD.svg";
import { useEffect, useState } from "react";
import useUserDataStore from "../../store/useUserDataStore";
import { useGetHostHistoryQuery } from "../../hooks/games/useGetHostHistoryQuery";
import { LoadingPage } from "../LoadingPage";
import { MatchTags } from "../../components/game/MatchTags";
import {
  GameCancelledTag,
  GameFinishedTag,
  RecruitingCompletedTag,
  RecruitingTag,
} from "../../stories/Tags.stories";
import { Link } from "react-router-dom";
import { GameDetailField } from "../../interface/gameInterface";
import { NotFoundPage } from "../NotFoundPage";
/**
 * TODO Group each game by date
 */

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

    // console.log(gameStatusQuery);
    refetch();
  }, [refetch, defaultTabName, gameStatusQuery]);

  if (isPending) {
    return <LoadingPage />;
  }

  if (isError) {
    return <NotFoundPage />;
  }
  return (
    <>
      <NavigateToPrevContainer children="나의 호스팅 경기" />

      <div className="relative laptop:w-[500px]  laptop:h-[735px] mobile:h-full   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-8 laptop:px-9 mobile:px-4 py-9 rounded-lg flex flex-col gap-10 ">
        <h1 className="text-center font-bold laptop:block mobile:hidden">
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

        <div className="flex flex-col gap-2.5">
          {gameData.map((game: GameDetailField) => {
            return (
              <div key={game.id} className="flex flex-col gap-2">
                <h2 className="font-bold">{game?.startdate}</h2>
                <Link to="/">
                  <div className="py-2 px-3 rounded-lg border border-gray-300 w-full">
                    {game?.game_status === "open" && (
                      <MatchTags {...RecruitingTag.args} />
                    )}
                    {game?.game_status === "canceled" && (
                      <MatchTags {...GameCancelledTag.args} />
                    )}
                    {game?.game_status === "closed" && (
                      <MatchTags {...RecruitingCompletedTag.args} />
                    )}
                    {game?.game_status === "completed" && (
                      <MatchTags {...GameFinishedTag.args} />
                    )}
                    <h2 className="font-bold">{game?.title}</h2>
                    {/* <p className="text-[#999]">{game?.court.address}</p> */}
                    <p className="text-[#999]">
                      {/* {game?.starttime.slice(0, -3)}~
                      {game?.endtime.slice(0, -3)} */}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
