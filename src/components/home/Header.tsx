// import { useLogoutMutation } from "../../hooks/useLogoutMutation";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";
import { BrowserHeader } from "../header/BrowserHeader";
import { MobileHeader } from "../header/MobileHeader";

export interface HeaderField {
  handleLogout: () => void;
}

export const Header = () => {
  // const { mutate: logoutMutation } = useLogoutMutation();
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      alert("로그아웃 되었습니다.");
      logout();
      navigate("/user/login");
      // logoutMutation();
      // window.location.reload();
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
