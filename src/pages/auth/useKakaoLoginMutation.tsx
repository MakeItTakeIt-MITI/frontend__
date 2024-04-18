import { useMutation } from "@tanstack/react-query";
import { oAuthKakaoLogin } from "../../api/auth";
import useAuthStore from "../../store/useAuthStore";
import useUserDataStore from "../../store/useUserDataStore";
import { useNavigate } from "react-router-dom";

export const useKakaoLoginMutation = (setModal: (arg: boolean) => void) => {
  const { login } = useAuthStore();
  const { setUserId } = useUserDataStore();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["kakao_login"],
    mutationFn: oAuthKakaoLogin,
    onSuccess: (response) => {
      if (response.error_code === 302) {
        setModal(true);
      }

      if (response.status_code === 200) {
        console.log(response);
        const { access, refresh } = response.data.token;
        localStorage.setItem("accessToken", access);
        localStorage.setItem("refreshToken", refresh);
        login();
        setUserId(response.data.id);
        navigate("/");
      }
    },
  });
};
