import { Link, useNavigate } from "react-router-dom";
import mitiLogo from "../../assets/MITI_logo.svg";
import useAuthStore from "../../store/useAuthStore";

// interface HeaderProps {
//   isLoggedIn?: boolean;
//   onLogout?: () => void;
// }

export const Header = () => {
  const { isLoggedIn, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      alert("로그아웃 되었습니다.");
      logout();
      navigate("/login");
      window.location.reload();
    } else {
      alert("취소합니다.");
      return;
    }
  };
  return (
    <header
      className="z-[99] mobile:h-[4rem] mobile:fixed mobile:flex mobile:justify-between mobile:px-[18px]  mobile:bottom-0 mobile:left-0 mobile:right-0 mobile:border mobile:border-t-gray-200 mobile:bg-white tablet:flex items-center   mobile:w-screen mobile:gap-4 
tablet:static tablet:border-none tablet:top-0 tablet:justify-between tablet:bg-white  tablet:max-w-[90rem tablet:w-full  tablet:px-[4rem] laptop:px-[13rem] tablet:mx-auto tablet:text-[18px] desktop:text-[20px] tablet:h-[3.75rem] 
    "
    >
      <div className="flex mobile:gap-6 tablet:items-center tablet:gap-5 ">
        <Link to="/">
          <img src={mitiLogo} alt="miti logo" />
        </Link>
        {/* <Link to="/" className=" tablet:block">
          <span>빠른 매칭</span>
        </Link> */}
        {/* <div className="tablet:block" onClick={() => alert("in progress")}>
          <span className=" font-bold text-[#707070]">팀</span>
          <span className="text-[0.8125rem] text-[#9B8EFD]">NEW</span>
        </div> */}
      </div>
      <div className="flex items-center mobile:gap-4 mobile:text-[16px] desktop:text-[16px]">
        {isLoggedIn ? (
          <>
            <button onClick={handleLogout}>로그아웃</button>
            <div>마이페이지</div>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-[#707070]"
              data-testid="login-link"
            >
              로그인
            </Link>
            <Link to="/signup" className="text-[#707070]">
              회원가입
            </Link>
          </>
        )}

        <Link to="/operate" className="">
          경기 만들기
        </Link>
      </div>
    </header>
  );
};
