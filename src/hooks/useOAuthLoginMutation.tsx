import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { KakaoLoginField } from "../components/forms/KakaoAuthHandler";
import { kakaoAuth } from "../api/auth";

export const useOAuthLoginMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: KakaoLoginField) => kakaoAuth(data),
    onSuccess: () => {
      navigate("/");
    },
  });
};
