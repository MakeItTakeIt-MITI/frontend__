import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import useAuthStore from "../../../store/_useAuthStore";

export const AuthenticateRoutes = () => {
  const { isLoggedIn } = useAuthStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  });

  return <Outlet />;
};
