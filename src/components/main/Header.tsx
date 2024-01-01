import { Link } from "react-router-dom";
import mitiLogo from "../../assets/MITI_logo.svg";
import useAuthStore from "../../store/useAuthStore";

// interface HeaderProps {
//   isLoggedIn?: boolean;
//   onLogout?: () => void;
// }

export const Header = () => {
  const { isLoggedIn, logout } = useAuthStore();
  return (
    <header
      className="flex items-center  mobile:p-4  mobile:mb-2 mobile:w-screen mobile:gap-4  mobile:flex-col mobile:text-[14px]
tablet:justify-between tablet:flex-row tablet:max-w-[90rem tablet:w-full  tablet:px-[4rem] laptop:px-[13rem] tablet:mx-auto tablet:text-[18px] desktop:text-[20px] tablet:h-[3.75rem] 
    "
    >
      <div className="flex mobile:gap-6 tablet:items-center tablet:gap-5 ">
        <Link to="/">
          <img src={mitiLogo} alt="miti logo" />
        </Link>
        <Link to="/" className=" tablet:block">
          <span>빠른 매칭</span>
        </Link>
        <div className="tablet:block" onClick={() => alert("in progress")}>
          <span className=" font-bold text-[#707070]">팀</span>
          <span className="text-[0.8125rem] text-[#9B8EFD]">NEW</span>
        </div>
      </div>
      <div className="flex items-center mobile:gap-4 mobile:text-[14px] desktop:text-[16px]">
        {isLoggedIn ? (
          <button onClick={() => logout()}>로그아웃</button>
        ) : (
          <>
            <Link to="/login" className="text-[#707070]">
              로그인
            </Link>
            <Link to="/signup" className="text-[#707070]">
              회원가입
            </Link>
          </>
        )}

        <Link to="/operate">
          <button className=" mobile:text-[14px] desktop:text-[16px]  tablet:p-[0.5rem] tablet:rounded-lg tablet:bg-[#4065F6] tablet:text-center tablet:text-white">
            경기 만들기
          </button>
        </Link>
      </div>
    </header>
  );
};
