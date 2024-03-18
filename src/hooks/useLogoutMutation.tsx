import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../api/auth";
import useAuthStore from "../store/useAuthStore";

export const useLogoutMutation = () => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();
  return useMutation({
    mutationFn: userLogout,
    onSuccess: () => {
      logout();
      navigate("/auth/login");
    },
  });
};
