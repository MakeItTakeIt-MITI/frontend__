import useAuthStore from "../../store/useAuthStore";
import { MobileHeader } from "../navigation/MobileHeader";
import { useLogoutMutation } from "../../hooks/auth/useLogoutMutation";
import { useEffect } from "react";
import BrowserHeader from "../navigation/BrowserHeader";
import BrowserNavbar from "../navigation/BrowserHeader";

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
      <BrowserNavbar />
    </header>
  );
};
