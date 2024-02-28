import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { userSignup } from "../api/auth";

export const useRegisterMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: userSignup,
    onSuccess: () => {
      navigate("/sms-authentication");
    },
    onError: () => {
      navigate("/user/login");
    },
  });
};
