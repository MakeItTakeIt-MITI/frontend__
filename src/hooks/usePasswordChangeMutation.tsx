import { useMutation } from "@tanstack/react-query";
import { userChangePassword } from "../api/users";
import { PasswordField } from "../interface/usersInterface";

export const usePasswordChangeMutation = (id: number | null) => {
  return useMutation({
    mutationFn: (data: PasswordField) => userChangePassword(id, data),
  });
};
