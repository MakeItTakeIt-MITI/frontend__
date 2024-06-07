import useAuthStore from "../../store/useAuthStore";
import { MobileHeader } from "../header/MobileHeader";
import { useLogoutMutation } from "../../hooks/auth/useLogoutMutation";
import { useEffect } from "react";
import BrowserHeader from "../header/BrowserHeader";

export interface HeaderField {
  isLoggedIn: boolean;
  handleLogout?: () => void;
}

export const Header = () => {
  const { logout, isLoggedIn } = useAuthStore();
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  useEffect(() => {}, [accessToken, refreshToken]);
  const { mutate: logoutMutate } = useLogoutMutation(
    accessToken,
    refreshToken,
    logout
  );

  const handleLogout = () => {
    logoutMutate();
  };

  return (
    <header className="relative">
      <MobileHeader />
      <BrowserHeader handleLogout={handleLogout} isLoggedIn={isLoggedIn} />
    </header>
  );
};
