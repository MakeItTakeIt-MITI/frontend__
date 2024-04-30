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

  const oAuthLoggedIn = localStorage.getItem("oAuth_user");
  const kakaoLogoutHandler = async () => {
    alert("개발중");
  };

  return (
    <nav className="relative  z-[999] mobile:hidden tablet:flex tablet:h-[3.75rem] items-center  justify-between max-w-[90rem] w-full laptop:px-[13rem] tablet:px-[2rem] mx-auto">
      <div className="flex gap-4 items-center">
        <Link to="/">
          <img src={mitiLogo} alt="miti logo" />
        </Link>
      </div>
      <div className="flex items-center gap-4  ">
        {isLoggedIn ? (
          <>
            <Link to={`/games/my-games`}>나의 경기</Link>
            <Link to={`/mypage`}>마이페이지</Link>

            {oAuthLoggedIn ? (
              <button onClick={kakaoLogoutHandler}>카카오 로그아웃</button>
            ) : (
              <button onClick={handleLogout}>로그아웃</button>
            )}
          </>
        ) : (
          <>
            <Link
              to="/auth/login"
              className="text-[#707070]"
              data-testid="login-link"
            >
              로그인
            </Link>
            <Link to="/auth/signup-option" className="text-[#707070]">
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
