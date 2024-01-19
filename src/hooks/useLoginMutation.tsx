import { useMutation } from "@tanstack/react-query";
import { userLoginAuth } from "../api/users";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: userLoginAuth,
  });
};
