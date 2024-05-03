import { useMutation } from "@tanstack/react-query";
import { verifySignupSMS } from "../../api/auth";
import { CodeVerificationField } from "../../interface/authInterface";

export const useRequestEmailCode = (
  auth_token: string | null,
  setCodeAuthSuccess: (arg: boolean) => void
) => {
  return useMutation({
    mutationKey: ["email_sms"],
    mutationFn: (data: CodeVerificationField) =>
      verifySignupSMS(auth_token, data),
    onSuccess: (response) => {
      console.log(response);

      if (response.status_code === 200) {
        const new_email_auth = response.data.authentication_token;
        localStorage.setItem("new_email_auth", new_email_auth);
        localStorage.setItem("user_email", response.data.email);

        setCodeAuthSuccess(true);
      }
    },
  });
};
