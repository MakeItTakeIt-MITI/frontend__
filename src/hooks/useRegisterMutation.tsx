import { useMutation } from "@tanstack/react-query";
import { userSignup } from "../api/users";

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: userSignup,
  });
};
