import { useMutation } from "@tanstack/react-query";
import { userEditInfo } from "../api/users";

export const useNicknameMutation = () => {
  return useMutation({
    mutationFn: userEditInfo,
    onSuccess: (data) => {
      console.log(data);
    },
  });
};
