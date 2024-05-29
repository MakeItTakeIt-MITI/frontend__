import { useMutation } from "@tanstack/react-query";
import { userUpdateNickname } from "../../api/users";

export const useNicknameChangeMutation = (user_id: number | null) => {
  return useMutation({
    mutationFn: (data: string | undefined) => userUpdateNickname(user_id, data),
  });
};
