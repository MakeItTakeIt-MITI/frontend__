import { useMutation } from "@tanstack/react-query";
import { FindEmailField } from "../../interface/user-edit-interface";
import { requestLostEmail } from "../../api/auth";

export const useFindEmailPhoneMutation = (
  setPhoneAuthSuccess: (arg: boolean) => void
) => {
  return useMutation({
    mutationKey: ["find_email"],
    mutationFn: (data: FindEmailField) => requestLostEmail(data),
    onSuccess: (response) => {
      if (response.status_code === 201) {
        const email_auth = response.data.authentication_token;
        localStorage.setItem("email_auth", email_auth);
        return setPhoneAuthSuccess(true);
      }
    },
  });
};
