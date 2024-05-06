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
      if (response.status_code === 200) {
        console.log(response);
        const { access, refresh } = response.data.token;
        localStorage.setItem("accessToken", access);
        localStorage.setItem("refreshToken", refresh);
        login();
        setUserId(response.data.id);
      }

      // if (response.status_code === 400) {
      //   alert("토큰 유효성 검증 실패");
      // } else if (response.status_code === 403 && response.error_code === 360) {
      //   alert("타 oauth 서비스 사용자");
      // } else if (response.status_code === 403 && response.error_code === 361) {
      //   alert("일반 로그인 사용자");
      // } else if (response.status_code === 404) {
      //   alert("지원하지 않는 oAuth 서비스");
      // } else if (response.status_code === 500 && response.error_code === 460) {
      //   alert("카카오 인증실패");
      // } else if (response.status_code === 403 && response.error_code === 461) {
      //   alert("카카오 사용자 정보 변환 실패");
      // }
    },
  });
};
