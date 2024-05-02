import { useMutation } from "@tanstack/react-query";
import useAuthStore from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import useUserDataStore from "../../store/useUserDataStore";
import { userLogin } from "../../api/auth";

export const useLoginMutation = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const { setUserId } = useUserDataStore();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: userLogin,
    onSuccess: (response) => {
      // success
      if (response.status_code === 200) {
        const userId = response.data.id;
        setUserId(userId);
        const { access, refresh } = response.data.token;
        localStorage.setItem("accessToken", access);
        localStorage.setItem("refreshToken", refresh);
        login();
        navigate("/");
      }
    },
  });
};
