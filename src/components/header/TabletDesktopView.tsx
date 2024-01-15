import { Link, useNavigate } from "react-router-dom";
import mitiLogo from "../../assets/MITI_logo.svg";
import useAuthStore from "../../store/useAuthStore";

export const TabletDesktopView = () => {
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
            <Link to="/signup" className="text-[#707070]">
              마이페이지
            </Link>
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

        <Link to="/operate" className=" p-2 bg-[#4065F6] text-white rounded-lg">
          경기 만들기
        </Link>
      </div>
    </nav>
  );
};
