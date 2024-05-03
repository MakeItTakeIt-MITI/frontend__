import { useMutation } from "@tanstack/react-query";
import { verifySignupSMS } from "../../api/auth";
import { CodeVerificationField } from "../../interface/authInterface";
import { useNavigate } from "react-router-dom";

export const useVerifySmsMutation = (auth_token: string | null) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: CodeVerificationField) =>
      verifySignupSMS(auth_token, data),
    onSuccess: (response) => {
      if (response.status_code === 200) {
        navigate("/auth/sms-authentication-verified");
      }
    },
  });
};
