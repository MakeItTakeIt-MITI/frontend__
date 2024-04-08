import { useMutation } from "@tanstack/react-query";
import { updateNewPassword } from "../api/auth";
import { NewPassworldField } from "../interface/user-edit-interface";

export const useNewPasswordMutation = (
  auth_key: string | null,
  isSuccess: (arg: boolean) => void
) => {
  return useMutation({
    mutationKey: ["new_password_request"],
    mutationFn: (data: NewPassworldField) => updateNewPassword(auth_key, data),
    onSuccess: (response) => {
      console.log(response);
      if (response.status_code === 200) {
        isSuccess(true);
      } else {
        isSuccess(false);
      }
    },
  });
};
