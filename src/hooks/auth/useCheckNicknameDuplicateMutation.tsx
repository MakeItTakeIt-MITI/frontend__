import { useMutation } from "@tanstack/react-query";
import { userValidation } from "../../api/validation";
import { ValidationField } from "../../interface/usersInterface";

export const useCheckNicknameDuplicateMutation = (
  setVerifyNicknameStatus: (arg: boolean) => void,
  setNicknameVerifyMsg: (arg: string) => void
) => {
  return useMutation({
    mutationKey: ["check_nickanme"],
    mutationFn: (data: ValidationField) => userValidation(data),
    onSuccess: (response) => {
      if (response.status_code === 200) {
        console.log("success");
        setVerifyNicknameStatus(true);
        console.log(response);
        if (response.data.nickname.is_duplicated === true) {
          setVerifyNicknameStatus(false);
          setNicknameVerifyMsg("이미 사용중인 닉네임입니다.");
        } else {
          setVerifyNicknameStatus(true);
          setNicknameVerifyMsg("멋진 닉네임이에요");
        }
      }

      if (response.status_code === 400) {
        setVerifyNicknameStatus(false);
        console.log("400");
        console.log(response);
        return setNicknameVerifyMsg("올바른 닉네임이 아닙니다!");
      }
    },
  });
};
