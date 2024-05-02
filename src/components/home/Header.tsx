import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";
import { BrowserHeader } from "../header/BrowserHeader";
import { MobileHeader } from "../header/MobileHeader";
import { useLogoutMutation } from "../../hooks/auth/useLogoutMutation";
import { useEffect } from "react";

export interface HeaderField {
  handleLogout: () => void;
}

export const Header = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  useEffect(() => {}, [accessToken, refreshToken]);
  const { mutate: logoutMutate } = useLogoutMutation(
    accessToken,
    refreshToken,
    logout
  );

  const handleLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      if (accessToken && refreshToken) {
        alert("로그아웃 되었습니다.");

        logoutMutate();
      } else {
        alert("no token");
      }

      // logoutMutation();
      // window.location.reload();
    } else {
      alert("취소합니다.");
      return;
    }
  };

  return (
    <header className="relative">
      <MobileHeader />
      <BrowserHeader handleLogout={handleLogout} />
    </header>
  );
};
