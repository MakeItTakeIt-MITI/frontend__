import { Link } from "react-router-dom";
import mitiLogo from "../../assets/MITI_logo.svg";
import useAuthStore from "../../store/useAuthStore";
import { HeaderField } from "../home/Header";
import bars from "../../assets/tab-bars.svg";
import { useState } from "react";
import tabImg from "../../assets/all-items-tab-img.jpg";
import axios from "axios";

export const BrowserHeader = ({ handleLogout }: HeaderField) => {
  const { isLoggedIn } = useAuthStore();
  const [displayTabItems, setDisplayTabItems] = useState(false);

  const displayTab = () => {
    setDisplayTabItems(!displayTabItems);
  };

  const refreshTest = async () => {
    try {
      // const refreshToken = localStorage.getItem("refreshToken");
      const response = await axios.post(
        "https://dev.makeittakeit.kr/auth/refresh-token",
        {},
        {
          headers: {
            refresh: localStorage.getItem("refreshToken"),
          },
        }
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="relative  z-[999] mobile:hidden tablet:flex tablet:h-[3.75rem] items-center  justify-between max-w-[90rem] w-full laptop:px-[13rem] tablet:px-[2rem] mx-auto">
      <div className="flex gap-4 items-center">
        <Link to="/">
          <img src={mitiLogo} alt="miti logo" />
        </Link>
        <button onClick={refreshTest}>refresh test</button>
      </div>
      <div className="flex items-center gap-4  ">
        {isLoggedIn ? (
          <>
            <Link to={`/games/my-games`}>나의 경기</Link>
            <Link to={`/mypage`}>마이페이지</Link>
            <button onClick={handleLogout}>로그아웃</button>
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
          {displayTabItems && (
            <div
              className="bg-[#fff] mx-auto z-[9999] absolute left-0  drop-shadow-xl right-0 top-[58px] rounded-xl  w-full max-w-[64rem] h-[300px] p-4 "
              onMouseLeave={displayTab}
            >
              <div className="p-4 flex justify-around ">
                <div className="flex justify-center items-center ">
                  <img
                    src={tabImg}
                    alt="basketball img"
                    className="w-[250px]"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold ">경기</h2>
                  <Link to="/games/guest-history">🏀 나의 참여 경기</Link>
                  <Link to="/games/host-history">🏁 나의 호스팅 경기</Link>
                  <Link to="/games/host">✉️ 경기 생성하기</Link>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold ">경기장</h2>
                  <Link to="/">🔍 경기장 조회</Link>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold ">내 정보</h2>
                  <Link to="/users-reviews">🗒️ 작성 리뷰</Link>
                  <Link to="/my-reviews">📪 내 리뷰</Link>
                  <Link to="/mypage">🏀 프로필 수정</Link>
                  <Link to="/faq">⁉️ FAQ</Link>
                  <Link to="/customer-service">📢 고객센터</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
