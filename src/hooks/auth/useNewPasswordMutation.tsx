import { useMutation } from "@tanstack/react-query";
import { updateNewPassword } from "../../api/auth";
import { NewPassworldField } from "../../interface/user-edit-interface";

export const useNewPasswordMutation = (auth_key: string | null) => {
  return useMutation({
    mutationKey: ["new_password_request"],
    mutationFn: (data: NewPassworldField) => updateNewPassword(auth_key, data),
    onSuccess: (response) => {
      if (response.status_code === 200) {
        console.log("201");
        console.log(response);
      }

      if (response.status_code == 400) {
        console.log("401");
        console.log(response);
      }
    },
  });
};
