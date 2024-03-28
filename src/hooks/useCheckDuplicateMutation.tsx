import { useMutation } from "@tanstack/react-query";
import { updateUserInfo } from "../api/validation";

export const useUpdateUserMutation = (userId: number | null) => {
  return useMutation({
    mutationFn: (data: { nickname: string | undefined }) =>
      updateUserInfo(userId, data),
  });
};
