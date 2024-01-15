import homeIcon from "../../assets/header_home_icon.svg";
import gamesIcon from "../../assets/header_games_icon.svg";
import profileIcon from "../../assets/header_profile_icon.svg";
import viewAllIcon from "../../assets/header_all_icon.svg";
import { Link } from "react-router-dom";

export const MobileHeader = () => {
  return (
    <nav className="tablet:hidden mobile:flex fixed bottom-0 w-full bg-white h-[4rem] border border-t-gray-200 z-10">
      <div className="flex items-center w-full justify-center gap-16  p-4">
        <Link to="/" className="flex flex-col gap-1 items-center ">
          <img src={homeIcon} alt="home icon" />
          <span className="text-[13px] text-[#969696]">홈</span>
        </Link>
        <Link to="/" className="flex flex-col gap-1 items-center">
          <img src={gamesIcon} alt="games icon" />
          <span className="text-[13px] text-[#969696]">경기</span>
        </Link>
        <Link to="/" className="flex flex-col gap-1 items-center">
          <img src={profileIcon} alt="profile icon" />
          <span className="text-[13px] text-[#969696]">프로필</span>
        </Link>
        <Link to="/" className="flex flex-col gap-1 items-center">
          <img src={viewAllIcon} alt="view all icon" />
          <span className="text-[13px] text-[#969696]">전체</span>
        </Link>
      </div>
    </nav>
  );
};
