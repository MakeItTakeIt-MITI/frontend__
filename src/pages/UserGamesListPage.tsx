import { NavigateToPrevContainer } from "../components/NavigateToPrevContainer";
import downarrow from "../assets/Chevron_Down_MD.svg";
import { useState } from "react";
import { MyGamesTabFilterButton } from "../components/game/MyGamesTabFilterButton";
import { useParams } from "react-router-dom";
import { useGetHostHistoryQuery } from "../hooks/useGetHostHistoryQuery";
import { useGetGameHistoryQuery } from "../hooks/useGetGameHistoryQuery";
import { NoGameHistoryBox } from "../components/game/NoGameHistoryBox";
import {
  GuestGameHistory,
  HostGameHistory,
} from "../components/game/GameHistory";
import { LoadingPage } from "./LoadingPage";
export const UserGamesListPage = () => {
  const [displayTab, setDisplayTab] = useState(false);
  const [tabName, setTabName] = useState("호스트만 보기");

  const { id } = useParams();
  const userIdParam = Number(id);

  const { data: hostHistory, isPending } = useGetHostHistoryQuery(userIdParam);
  const { data: guestHistory } = useGetGameHistoryQuery(userIdParam);

  const handleToggleTab = () => {
    setDisplayTab(!displayTab);
  };

  const handleChangeTab = (name: string) => {
    setTabName(name);
    setDisplayTab(false);
  };

  if (isPending) {
    return <LoadingPage />;
  }
  return (
    <div className=" mobile:w-full tablet:px-[13rem] tablet:max-w-[90rem] tablet:mb-0 mx-auto mobile:mb-[4rem] py-3">
      <NavigateToPrevContainer />
      <div className="flex justify-between p-4 ">
        <h4 className="text-[18px] font-bold">나의 매치 스케줄</h4>
        <div className="relative">
          <button onClick={handleToggleTab} className="flex gap-4 ">
            <span className="text-[#333] text-[14px] font-[500]">
              {tabName}
            </span>
            <img src={downarrow} alt="down arrow" />
          </button>
          <MyGamesTabFilterButton
            displayTab={displayTab}
            handleChangeTab={handleChangeTab}
            tabName={tabName}
          />
        </div>
      </div>
      <div className="px-4 text-[14px]">
        <span className="text-[#666]">등록된 매치 스케줄 </span>{" "}
        <span className="font-bold text-[#333]">
          {tabName === "호스트만 보기" && hostHistory?.data.length + "개"}
          {tabName === "게스트만 보기" && guestHistory?.data.length + "개"}
        </span>
      </div>
      <div className="flex-wrap h-full flex justify-between gap-4 py-4 mobile:px-4">
        {(tabName === "호스트만 보기" && hostHistory?.data.length < 1) ||
        (tabName === "게스트만 보기" && guestHistory?.data.length < 1) ? (
          <NoGameHistoryBox />
        ) : tabName === "호스트만 보기" ? (
          <HostGameHistory hostHistory={hostHistory} />
        ) : (
          <GuestGameHistory guestHistory={guestHistory} />
        )}
      </div>
    </div>
  );
};
