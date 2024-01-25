import { useMutation } from "@tanstack/react-query";
import { authenticationSMS } from "../api/auth";
import { useNavigate } from "react-router-dom";

export const useVerifySmsMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authenticationSMS,
    onSuccess: () => {
      localStorage.removeItem("authentication_token");
      navigate("/login");
    },
  });
};
