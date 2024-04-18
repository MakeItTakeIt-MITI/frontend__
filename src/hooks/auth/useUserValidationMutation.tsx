import { useMutation } from "@tanstack/react-query";
import { userValidation } from "../../api/validation";

type SetValidFunction = (value: boolean) => void;

export const useValidateDuplicateEmail = (
  setValidEmail: SetValidFunction,
  setSuccessEmailMsg: (arg: string) => void,
  setErrorEmailMsg: (arg: string) => void
) => {
  return useMutation({
    mutationFn: userValidation,
    onSuccess: (response) => {
      console.log(response);

      if (
        response.status_code === 200 &&
        response.data.email.is_duplicated === true
      ) {
        setValidEmail(false);
        setErrorEmailMsg("이미 회원으로 등록된 이메일이에요.");
      } else {
        setErrorEmailMsg("");
      }
      if (
        response.status_code === 200 &&
        response.data.email.is_duplicated === false
      ) {
        setValidEmail(true);
        setSuccessEmailMsg("사용 가능한 이메일이에요!");
      } else {
        setValidEmail(false);
        setSuccessEmailMsg("");
      }
    },
  });
};

export const useValidateDuplicateNickname = (
  setValidNickname: SetValidFunction,
  setSuccessNicknameMsg: (arg: string) => void,
  setErrorNicknameMsg: (arg: string) => void
) => {
  return useMutation({
    mutationFn: userValidation,
    onSuccess: (response) => {
      console.log(response);
      console.log(response);

      if (
        response.status_code === 200 &&
        response.data.nickname.is_duplicated === true
      ) {
        setValidNickname(false);
        setErrorNicknameMsg("이미 회원으로 등록된 이메일이에요.");
      } else {
        setErrorNicknameMsg("");
      }
      if (
        response.status_code === 200 &&
        response.data.nickname.is_duplicated === false
      ) {
        setValidNickname(true);
        setSuccessNicknameMsg("사용 가능한 이메일이에요!");
      } else {
        setValidNickname(false);
        setSuccessNicknameMsg("");
      }
    },
  });
};
