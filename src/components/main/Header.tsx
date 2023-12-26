import { Link } from "react-router-dom";
import mitiLogo from "../../assets/MITI_logo.svg";

interface HeaderProps {
  isLoggedIn?: boolean;
  onLogout?: () => void;
}

export const Header = ({ isLoggedIn, onLogout }: HeaderProps) => {
  return (
    <header
      className="flex items-center  mobile:p-4  mobile:mb-2 mobile:w-screen mobile:gap-4  mobile:flex-col

    "
    >
      <div>
        <Link to="/">
          <img src={mitiLogo} alt="miti logo" />
        </Link>
        <Link to="/" className="mobile:hidden">
          <span>빠른 매칭</span>
        </Link>
        {/* <div onClick={() => alert("in progress")}>
          <span className=" font-bold text-[#707070]">팀</span>
          <span className="text-[0.8125rem] text-[#9B8EFD]">NEW</span>
        </div> */}
      </div>
      <div className="flex mobile:gap-4 mobile:text-[14px]">
        {isLoggedIn ? (
          <button onClick={onLogout}>로그아웃</button>
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
          <button className=" mobile:text-[14px] ">경기 만들기</button>
        </Link>
      </div>
    </header>
  );
};
