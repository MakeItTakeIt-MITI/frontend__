import { useMutation, useQueries, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { kakaoAuthSMS } from "../api/auth";

export const useVerifySmsMutation = (code: string | null) => {
  // const navigate = useNavigate();
  return useMutation({
    mutationFn: () => kakaoAuthSMS(code),
    onSuccess: () => {
      // localStorage.removeItem("authentication_token");
      // navigate("/user/login");
    },
  });
};

export const useGetKakaoLogin = ({ code }) => {
  // const navigate = useNavigate();
  return useQuery({
    queryKey: ["kakaokey"],
    queryFn: () => kakaoAuthSMS(code),
  });
};
