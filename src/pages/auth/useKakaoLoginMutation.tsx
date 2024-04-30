import { useMutation } from "@tanstack/react-query";
import { oAuthKakaoLogin } from "../../api/auth";
import useAuthStore from "../../store/useAuthStore";
import useUserDataStore from "../../store/useUserDataStore";
import { useNavigate } from "react-router-dom";

export const useKakaoLoginMutation = () => {
  const { login } = useAuthStore();
  const { setUserId } = useUserDataStore();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["kakao_login"],
    mutationFn: oAuthKakaoLogin,
    onSuccess: (response) => {
      console.log(response.status_code);
      console.log(response);

      if (response.error_code === 302) {
        // setModal(true);
        alert("oAuth 사용자가 아닙니다.");
        navigate("/auth/login");
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
