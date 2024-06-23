import { useMutation } from "@tanstack/react-query";
import { userValidation } from "../../api/validation";

export const useValidateDuplicateEmail = () => {
  return useMutation({
    mutationFn: userValidation,
  });
};

export const useValidateDuplicateNickname = () => {
  return useMutation({
    mutationFn: userValidation,
  });
};
