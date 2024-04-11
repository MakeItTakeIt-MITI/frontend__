import { useMutation } from "@tanstack/react-query";
import { userUpdateNickname } from "../../api/users";
import { NicknameField } from "../../interface/usersInterface";

export const useNicknameChangeMutation = (id: number | null) => {
  return useMutation({
    mutationFn: (data: NicknameField) => userUpdateNickname(id, data),
    onSuccess: () => window.location.reload(),
  });
};
