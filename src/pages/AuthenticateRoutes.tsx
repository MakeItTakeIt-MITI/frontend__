import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUserInfoQuery } from "../hooks/useUserInfoQuery";
import useUserDataStore from "../store/useUserDataStore";
import { LoadingPage } from "./LoadingPage";
import useAuthStore from "../store/useAuthStore";

export const AuthenticateRoutes = () => {
  //   const { userId } = useUserDataStore();
  const { isLoggedIn } = useAuthStore();
  //   const { data, isPending } = useUserInfoQuery(userId);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  });
  //   }, [isLoggedIn]);
  //   if (isPending) {
  //     return <LoadingPage />;
  //   }
  return <Outlet />;
};
