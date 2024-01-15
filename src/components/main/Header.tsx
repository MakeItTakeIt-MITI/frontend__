import { Link, useNavigate } from "react-router-dom";
import mitiLogo from "../../assets/MITI_logo.svg";
import useAuthStore from "../../store/useAuthStore";
import { TabletDesktopHeader } from "../header/TabletDesktopHeader";

// interface HeaderProps {
//   isLoggedIn?: boolean;
//   onLogout?: () => void;
// }

export const Header = () => {
  // const { isLoggedIn, logout } = useAuthStore();
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   if (window.confirm("로그아웃 하시겠습니까?")) {
  //     alert("로그아웃 되었습니다.");
  //     logout();
  //     navigate("/login");
  //     window.location.reload();
  //   } else {
  //     alert("취소합니다.");
  //     return;
  //   }
  // };
  return (
    <header>
      {/* <header
      className="z-[99] mobile:h-[4rem] mobile:fixed mobile:flex mobile:justify-between mobile:px-[18px]  mobile:bottom-0 mobile:left-0 mobile:right-0 mobile:border mobile:border-t-gray-200 mobile:bg-white tablet:flex items-center   mobile:w-screen mobile:gap-4 
tablet:static tablet:border-none tablet:top-0 tablet:justify-between tablet:bg-white  tablet:max-w-[90rem tablet:w-full  tablet:px-[4rem] laptop:px-[13rem] tablet:mx-auto tablet:text-[18px] desktop:text-[20px] tablet:h-[3.75rem] 
    "
    > */}
      {/* <div className="flex mobile:gap-6 tablet:items-center tablet:gap-5 "> */}
      {/* mobile */}

      {/* tablet laptop desktop */}
      <TabletDesktopHeader />
    </header>
  );
};
