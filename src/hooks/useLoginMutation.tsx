import { useMutation } from "@tanstack/react-query";
import { userLoginAuth } from "../api/users";
import useAuthStore from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

export const useLoginMutation = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: userLoginAuth,
    onSuccess: (data) => {
      if (data?.status_code === 200) {
        const accessToken = data.data.token.access;
        const refreshToken = data.data.token.refresh;
        const userId = data.data.id;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("id", userId);
        login();
        navigate("/");
      }
    },
  });
};
