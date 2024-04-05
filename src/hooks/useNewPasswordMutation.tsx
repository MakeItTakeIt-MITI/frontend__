import { useMutation } from "@tanstack/react-query";
import { updateNewPassword } from "../api/auth";
import { NewPassworldField } from "../interface/user-edit-interface";

export const useNewPasswordMutation = (auth_key: string) => {
  return useMutation({
    mutationKey: ["new_password_request"],
    mutationFn: (data: NewPassworldField) => updateNewPassword(auth_key, data),
  });
};
