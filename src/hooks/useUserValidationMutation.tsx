import { useMutation } from "@tanstack/react-query";
import { userValidation } from "../api/validation";
import { ValidationProps } from "../interface/usersInterface";

export const useUserValidationMutation = ({
  setValidEmail,
  setDisplayEmailMsg,
  setValidNickname,
  setDisplayNickMsg,
}: ValidationProps) => {
  return useMutation({
    mutationFn: userValidation,
    onSuccess: (data) => {
      console.log(data);
      const emailValidationCheck = data.data.email?.is_duplicated;
      const nicknameValidationCheck = data.data.nickname?.is_duplicated;

      if (emailValidationCheck === true) {
        setValidEmail(false);
        setDisplayEmailMsg(true);
      } else if (emailValidationCheck === false) {
        setValidEmail(true);
        setDisplayEmailMsg(false);
      } else if (nicknameValidationCheck === true) {
        setValidNickname(false);
        setDisplayNickMsg(true);
      } else if (nicknameValidationCheck === false) {
        setValidNickname(true);
        setDisplayNickMsg(false);
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
