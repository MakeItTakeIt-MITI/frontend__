import { useMutation } from "@tanstack/react-query";
import { userUpdateNickname } from "../../api/users";

export const useNicknameChangeMutation = (user_id: number | null) => {
  return useMutation({
    mutationFn: (nickname: { nickname: string | undefined }) =>
      userUpdateNickname(user_id, nickname),
  });
};
