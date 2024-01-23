import homeIcon from "../../assets/header_home_icon.svg";
import gamesIcon from "../../assets/header_games_icon.svg";
import profileIcon from "../../assets/header_profile_icon.svg";
import viewAllIcon from "../../assets/header_all_icon.svg";

import homeIconColor from "../../assets/header_home_color.svg";
import gamesIconColor from "../../assets/header_game_color.svg";
import profileIconColor from "../../assets/header_profile_color.svg";
// import viewIconColor from "../../assets/header_view_color.svg";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Sidebar } from "./Sidebar";

export const MobileHeader = () => {
  const [displayTab, setDisplayTab] = useState(false);

  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/signup" ? null : (
        <nav className="tablet:hidden mobile:flex fixed bottom-0 left-0 right-0 w-full bg-white h-[4rem] border border-t-gray-200 z-10 rounded-t-2xl">
          <div className="flex items-center w-full justify-center gap-16  p-4">
            <Link to="/" className="flex flex-col gap-1 items-center ">
              {pathname === "/" ? (
                <img src={homeIconColor} alt="home icon" />
              ) : (
                <img src={homeIcon} alt="home icon" />
              )}
              <span className="text-[13px] text-[#969696]">홈</span>
            </Link>
            <Link to="/operate" className="flex flex-col gap-1 items-center">
              {pathname === "/operate" ? (
                <img src={gamesIconColor} alt="games icon" />
              ) : (
                <img src={gamesIcon} alt="games icon" />
              )}
              <span className="text-[13px] text-[#969696]">경기</span>
            </Link>
            <Link to="/login" className="flex flex-col gap-1 items-center">
              {pathname === "/login" || pathname === "/profile" ? (
                <img src={profileIconColor} alt="profile icon" />
              ) : (
                <img src={profileIcon} alt="profile icon" />
              )}
              <span className="text-[13px] text-[#969696]">프로필</span>
            </Link>
            <button
              type="button"
              onClick={() => setDisplayTab(true)}
              className="flex flex-col gap-1 items-center"
            >
              <img src={viewAllIcon} alt="view all icon" />
              <span className="text-[13px] text-[#969696]">전체</span>
            </button>
          </div>
          {displayTab && <Sidebar setDisplayTab={setDisplayTab} />}
        </nav>
      )}
    </>
  );
};
