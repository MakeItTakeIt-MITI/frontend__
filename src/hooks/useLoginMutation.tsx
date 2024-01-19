import { useMutation } from "@tanstack/react-query";
import { userLoginAuth } from "../api/users";
import { LoginField } from "../interface/usersInterface";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data: LoginField) => {
      return userLoginAuth(data);
    },
  });
};
