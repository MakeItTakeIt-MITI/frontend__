import { BrowserHeader } from "../header/BrowserHeader";
import { MobileHeader } from "../header/MobileHeader";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";

export interface HeaderField {
  handleLogout: () => void;
}

export const Header = () => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

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
    <>
      <MobileHeader />
      <BrowserHeader handleLogout={handleLogout} />
    </>
  );
};
