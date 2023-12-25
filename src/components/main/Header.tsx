import { Link } from "react-router-dom";
import mitiLogo from "../../assets/MITI_logo.svg";

interface HeaderProps {
  isLoggedIn?: boolean;
  onLogout?: () => void;
}

export const Header = ({ isLoggedIn, onLogout }: HeaderProps) => {
  return (
    <header className="flex  flex-row  items-center w-full  max-w-[90] h-[3.75rem] px-[13rem] ">
      <nav className="flex  flex-row    items-center justify-between w-full text-[1.25rem] ">
        <div className="flex  flex-row  items-center jusitfy-evenly gap-[1.5rem]">
          <Link to="/" className="">
            <img
              className="w-[5.5rem] h-[1.75rem]"
              src={mitiLogo}
              alt="miti logo"
            />
          </Link>
          <Link to="/" className="">
            <span className="font-bold">빠른 매칭</span>
          </Link>
          <div
            className="flex items-center"
            onClick={() => alert("in progress")}
          >
            <span className=" font-bold text-[#707070]">팀</span>
            <span className="text-[0.8125rem] text-[#9B8EFD]">NEW</span>
          </div>
        </div>
        <div className="flex items-center justify-evenly gap-[1.5rem] text-[1rem]">
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
            <button>경기 만들기</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};
