import { useMutation } from "@tanstack/react-query";
import { verifySignupSMS } from "../../api/auth";
import { CodeVerificationField } from "../../interface/authInterface";

export const usePasswordCodeMutation = (token: string | null) => {
  return useMutation({
    mutationKey: ["requestPasswordSMS"],
    mutationFn: (data: CodeVerificationField) => verifySignupSMS(token, data),
    onSuccess: (response) => {
      if (response.status_code === 200) {
        localStorage.removeItem("auth");
        const authen_code = response.data.authentication_token;
        localStorage.setItem("new_auth", authen_code);
      }
    },
  });
};
