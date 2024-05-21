import homeIcon from "../../assets/header_home_icon.svg";
import gamesIcon from "../../assets/header_games_icon.svg";
import profileIcon from "../../assets/header_profile_icon.svg";
import viewAllIcon from "../../assets/header_all_icon.svg";
import viewAllIconColor from "../../assets/header_view_color.svg";
import homeIconColor from "../../assets/header_home_color.svg";
import gamesIconColor from "../../assets/header_game_color.svg";
import profileIconColor from "../../assets/header_profile_color.svg";
import { Link, useLocation } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";

export const MobileHeader = () => {
  const { isLoggedIn } = useAuthStore();

  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/auth/signups" || pathname === "/auth/logins" ? null : (
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
            <Link to="/games/host" className="flex flex-col gap-1 items-center">
              {pathname === "/games/host" ? (
                <img src={gamesIconColor} alt="games icon" />
              ) : (
                <img src={gamesIcon} alt="games icon" />
              )}
              <span className="text-[13px] text-[#969696]">경기</span>
            </Link>

            {!isLoggedIn ? (
              <Link
                to="/auth/login"
                className="flex flex-col gap-1 items-center"
              >
                <img src={profileIcon} alt="profile icon" />
                <span className="text-[13px] text-[#969696]">프로필</span>
              </Link>
            ) : (
              <Link
                to={`/user/profile`}
                className="flex flex-col gap-1 items-center"
              >
                {pathname === `/user/profile` ? (
                  <img src={profileIconColor} alt="profile icon" />
                ) : (
                  <img src={profileIcon} alt="profile icon" />
                )}
                <span className="text-[13px] text-[#969696]">프로필</span>
              </Link>
            )}

            <Link to="mobile-tab" className="flex flex-col gap-1 items-center">
              {pathname === `/mobile-tab` ? (
                <img src={viewAllIconColor} alt="tab icon" />
              ) : (
                <img src={viewAllIcon} alt="tab icon" />
              )}
              <span className="text-[13px] text-[#969696]">전체</span>
            </Link>
          </div>
          {/* {displayTab && <MobileDisplayaAllTab setDisplayTab={setDisplayTab} />} */}
        </nav>
      )}
    </>
  );
};
