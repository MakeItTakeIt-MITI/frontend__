import { useMutation } from "@tanstack/react-query";
import { userEditInfo } from "../api/users";
import { UserEditField } from "../interface/usersInterface";

export const useNicknameMutation = () => {
  return useMutation({
    mutationFn: ({ id, data }: UserEditField) => userEditInfo(id, data),
  });
};
