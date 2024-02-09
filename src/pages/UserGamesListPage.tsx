import { NavigateToPrevContainer } from "../components/NavigateToPrevContainer";
import downarrow from "../assets/Chevron_Down_MD.svg";
import { useState } from "react";
import { MyGamesTabFilterButton } from "../components/game/MyGamesTabFilterButton";
import { MatchContainer } from "../components/game/MatchContainer";
// import { UserMatchesFilterBtn } from "../components/game/UserMatchesFilterBtn";
// import { ViewAllButton } from "../stories/FilterButtons.stories";
export const UserGamesListPage = () => {
  const [displayTab, setDisplayTab] = useState(false);
  const [tabName, setTabName] = useState("전체보기");

  const handleToggleTab = () => {
    setDisplayTab(!displayTab);
  };

  const handleChangeTab = (name: string) => {
    setTabName(name);
    setDisplayTab(false);
  };
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
      <div className="flex-wrap h-full flex justify-around gap-4 p-4">
        <MatchContainer />
        <MatchContainer />
        <MatchContainer />
        <MatchContainer />
        <MatchContainer />
        <MatchContainer />
        <MatchContainer />
        <MatchContainer />
      </div>
    </div>
  );
};
