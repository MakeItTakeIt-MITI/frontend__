import { useMutation } from "@tanstack/react-query";
import { kakaoAuthSMS } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { KakaoLoginField } from "../components/forms/KakaoAuthHandler";

export const useOAuthLoginMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: KakaoLoginField) => kakaoAuthSMS(data),
    onSuccess: () => {
      navigate("/");
    },
  });
};
