import { useMutation } from "@tanstack/react-query";
import { userChangePassword } from "../../api/users";
import { PasswordField } from "../../interface/usersInterface";

export const usePasswordChangeMutation = (id: number | null) => {
  return useMutation({
    mutationFn: (data: PasswordField) => userChangePassword(id, data),
    onSuccess: (response) => {
      if (response?.status_code === 200) {
        window.location.reload();
      }
    },
  });
};
