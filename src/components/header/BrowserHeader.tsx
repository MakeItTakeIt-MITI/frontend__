import { Link } from "react-router-dom";
import mitiLogo from "../../assets/MITI_logo.svg";
import useAuthStore from "../../store/useAuthStore";
import { HeaderField } from "../home/Header";
import bars from "../../assets/tab-bars.svg";
import { useState } from "react";
import { HeaderTabContainer } from "../common/HeaderTabContainer";

export const BrowserHeader = ({ handleLogout }: HeaderField) => {
  const { isLoggedIn } = useAuthStore();
  const [displayTabItems, setDisplayTabItems] = useState(false);

  const displayTab = () => {
    setDisplayTabItems(!displayTabItems);
  };

  return (
    <nav className="relative  z-[999] mobile:hidden tablet:flex tablet:h-[3.75rem] items-center  justify-between max-w-[1024px] w-full tablet:px-[4rem] laptop:px-[0px]   mx-auto">
      <div className="flex gap-4 items-center">
        <Link to="/">
          <img src={mitiLogo} alt="miti logo" />
        </Link>
      </div>
      <div className="flex items-center gap-6 text-[16px] font-[500]  ">
        {isLoggedIn ? (
          <>
            {/* <Link to={`/games/my-games`}>나의 경기</Link> */}

            <button onClick={handleLogout}>로그아웃</button>

            <Link to={`/mypage`}>내 정보</Link>
          </>
        ) : (
          <>
            <Link to="/auth/login" className="text-[#707070]">
              로그인
            </Link>
            <Link to="/auth/signup" className="text-[#707070]">
              회원가입
            </Link>
          </>
        )}

        <div className="" onClick={displayTab}>
          <img src={bars} alt="tab icon" className="hover:cursor-pointer" />
          {displayTabItems && <HeaderTabContainer displayTab={displayTab} />}
        </div>
      </div>
    </nav>
  );
};
