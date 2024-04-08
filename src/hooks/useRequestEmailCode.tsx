import { useMutation } from "@tanstack/react-query";
import { verifySignupSMS } from "../api/auth";
import { CodeVerificationField } from "../interface/authInterface";

export const useRequestEmailCode = (
  auth_token: string | null,
  setCodeStatus: (arg: number) => void,
  setCodeAuthSuccess: (arg: boolean) => void,
  isOAuthUser: (arg: boolean) => void,
  isDeletedAccount: (arg: boolean) => void
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
        setCodeStatus(200);
        setCodeAuthSuccess(true);

        if (response.data.is_oauth === true) {
          isOAuthUser(true);
        }
      }

      if (response.status_code === 400) {
        if (response.error_code === 102) {
          setCodeStatus(102);
          console.log("102");
        } else if (response.error_code === 401) {
          setCodeStatus(401);
          console.log("401");
        } else if (response.error_code === 901) {
          setCodeStatus(901);
          console.log("901");
        } else if (response.error_code === 902) {
          setCodeStatus(902);
          console.log("902");
        }
      }

      if (response.status_code === 403) {
        if (response.error_code === 401) {
          setCodeStatus(401);
          console.log("401");
          isDeletedAccount(true);
        } else if (response.error_code === 402) {
          setCodeStatus(402);
          console.log("402");
        } else if (response.error_code === 403) {
          setCodeStatus(403);
          console.log("403");
        }
      }
    },
  });
};
