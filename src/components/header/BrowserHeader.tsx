import { Link } from "react-router-dom";
import mitiLogo from "../../assets/MITI_logo.svg";
import useAuthStore from "../../store/useAuthStore";
import { HeaderField } from "../main/Header";
import useUserDataStore from "../../store/useUserDataStore";

export const BrowserHeader = ({ handleLogout }: HeaderField) => {
  const { isLoggedIn } = useAuthStore();
  const { userId } = useUserDataStore();

  return (
    <nav className=" mobile:hidden tablet:flex tablet:h-[3.75rem] items-center  justify-between max-w-[90rem] w-full px-[13rem] mx-auto">
      <div className="flex gap-4 items-center">
        <Link to="/">
          <img src={mitiLogo} alt="miti logo" />
        </Link>
        <Link to="/" className="text-[#000] font-bold text-[20px]">
          빠른 매칭
        </Link>
      </div>
      <div className="flex items-center gap-4  ">
        {isLoggedIn ? (
          <>
            <button onClick={handleLogout}>로그아웃</button>
            <Link to={`/profile/${userId}`} className="text-[#707070]">
              마이페이지
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/user/login"
              className="text-[#707070]"
              data-testid="login-link"
            >
              로그인
            </Link>
            <Link to="/user/signup" className="text-[#707070]">
              회원가입
            </Link>
          </>
        )}

        <Link
          to="/games/host"
          className=" p-2 bg-[#4065F6] text-white rounded-lg"
        >
          경기 만들기
        </Link>
      </div>
    </nav>
  );
};
