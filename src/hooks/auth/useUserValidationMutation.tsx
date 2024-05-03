import { useMutation } from "@tanstack/react-query";
import { userValidation } from "../../api/validation";

export const useValidateDuplicateEmail = (
  setValidEmail: (arg: boolean) => void
) => {
  return useMutation({
    mutationFn: userValidation,
    onSuccess: (response) => {
      if (response?.data.email.is_duplicated === false) {
        setValidEmail(true);
      }
    },
  });
};

export const useValidateDuplicateNickname = (
  setValidNickname: (arg: boolean) => void
) => {
  return useMutation({
    mutationFn: userValidation,
    onSuccess: (response) => {
      if (response?.data.nickname.is_duplicated === false) {
        setValidNickname(true);
      }
    },
  });
};
