import { Outlet, useNavigate } from "react-router-dom";
import useAuthStore from "../../../store/useAuthStore";
import { useEffect } from "react";

export const PrivateRoute = () => {
  const { isLoggedIn } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth/login");
    }
  });
  return <Outlet />;
};
