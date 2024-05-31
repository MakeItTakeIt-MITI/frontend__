import { useMutation } from "@tanstack/react-query";
import { userLogout } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export const useLogoutMutation = (
  accessToken: string | null,
  refreshToken: string | null,
  logout: () => void
) => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: () => userLogout(accessToken, refreshToken),
    onSuccess: () => {
      logout();
      navigate("/auth/login");
    },
  });
};
