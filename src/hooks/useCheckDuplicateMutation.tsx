import { useMutation } from "@tanstack/react-query";
import { updateUserInfo } from "../api/validation";
import { UserEditField } from "../interface/user-edit-interface";

export const useUpdateUserMutation = (userId: number | null) => {
  return useMutation({
    mutationFn: (data: UserEditField) => updateUserInfo(userId, data),
  });
};
