import { useMutation } from "@tanstack/react-query";
import { kakaoAuthSMS } from "../api/auth";
import { useNavigate } from "react-router-dom";

export const useOAuthLoginMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: string) => kakaoAuthSMS(data),
    onSuccess: () => {
      navigate("/");
    },
  });
};
