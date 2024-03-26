import { Link } from "react-router-dom";
import mitiLogo from "../../assets/MITI_logo.svg";
import useAuthStore from "../../store/useAuthStore";
import { HeaderField } from "../home/Header";
import useUserDataStore from "../../store/useUserDataStore";
import bars from "../../assets/tab-bars.svg";
import { useState } from "react";

export const BrowserHeader = ({ handleLogout }: HeaderField) => {
  const { isLoggedIn } = useAuthStore();
  const { userId } = useUserDataStore();
  const [displayTabItems, setDisplayTabItems] = useState(false);

  const displayTab = () => {
    setDisplayTabItems(!displayTabItems);
  };

  return (
    <nav className=" z-[999] mobile:hidden tablet:flex tablet:h-[3.75rem] items-center  justify-between max-w-[90rem] w-full laptop:px-[13rem] tablet:px-[2rem] mx-auto">
      <div className="flex gap-4 items-center">
        <Link to="/">
          <img src={mitiLogo} alt="miti logo" />
        </Link>
        {/* <Link to="/" className="text-[#000] font-bold text-[20px]">
          빠른 매칭
        </Link> */}
      </div>
      <div className="flex items-center gap-4  ">
        {isLoggedIn ? (
          <>
            <Link to={`/games/mygames/${userId}`} className=" ">
              나의 경기
            </Link>
            <Link to={`/profile/${userId}`}>마이페이지</Link>
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
            <Link to="/auth/signup" className="text-[#707070]">
              회원가입
            </Link>
          </>
        )}

        {/* <Link
          to="/games/host"
          className=" p-2 bg-[#4065F6] text-white rounded-lg"
        >
          경기 만들기
        </Link> */}
        <div className="relative " onClick={displayTab}>
          <img src={bars} alt="tab icon" className="hover:cursor-pointer" />
          {displayTabItems && (
            <div
              className="bg-[#F5F5F5] z-[99] absolute right-0 w-[537px] h-[196px] rounded-xl"
              onMouseLeave={displayTab}
            >
              <div className="p-4 flex gap-[176px] text-[14px]">
                <div className="flex flex-col gap-2 justify-between h-full ">
                  <div className="flex flex-col gap-1">
                    <h2 className="font-bold">경기</h2>
                    <p>🏀 나의 참여 경기</p>
                    <p>🏁 나의 호스팅 경기</p>
                    <p>✉️ 경기 생성하기</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="font-bold">경기장</h2>
                    <p>🔍 경기장 조회</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="font-bold">내 정보</h2>
                  <p>🗒️작성 리뷰</p>
                  <p>📪 내 리뷰</p>
                  <p>🏀 프로필 수정</p>
                  <p>⁉️ FAQ</p>
                  <p>📢 고객센터</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
