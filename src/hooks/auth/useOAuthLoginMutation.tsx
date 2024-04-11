// import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { kakaoAuthLogin } from "../../api/auth";

export const useKakaoLoginQuery = (code: string | null) => {
  return useQuery({
    queryKey: ["kakao_login"],
    queryFn: () => kakaoAuthLogin(code),
  });
};
