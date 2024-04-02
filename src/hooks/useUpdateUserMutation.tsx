import { useMutation } from "@tanstack/react-query";
import { updateUserInfo } from "../api/validation";
import { UserEditField } from "../interface/user-edit-interface";
import { useNavigate } from "react-router-dom";

export const useUpdateUserMutation = (
  userId: number | null,
  setPassVerification: (arg: string) => void,
  setNicknameVerification: (arg: string) => void,
  setNewPassword: (arg: string) => void
) => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["updateUserInfo"],
    mutationFn: (data: UserEditField) => updateUserInfo(userId, data),
    onSuccess: (response) => {
      if (response.data && response.data.status_code === 200) {
        navigate("/mypage");
      }
      // nickname verification
      if (response.data && response.data.data.nickname) {
        response.data.data.nickname.map((errorMsg: string) => {
          console.log(errorMsg);
          if (
            errorMsg === "이 필드의 글자 수가  적어도 3 이상인지 확인하십시오."
          ) {
            setNicknameVerification("유효한 닉네임이 아닙니다.");
          } else {
            setNicknameVerification("이미 사용중인 닉네임입니다.");
          }
        });
        // password verification
      } else if (response.data && response.data.data.password) {
        response.data.data.password.map((errorMsg: string) => {
          console.log(errorMsg, "pass");
          if (
            errorMsg ===
            "비밀번호는 8자 이상의 영문 대소문자와 숫자, 특수문자를 포함하여야 합니다."
          ) {
            console.log("true");
            setPassVerification("유효한 비밀번호가 아닙니다.");
          } else {
            setPassVerification("비밀번호가 일치하지 않습니다.");
          }
        });
        // new assword verification
      } else if (response.data && response.data.data.new_password) {
        response.data.data.new_password.map((errorMsg: string) => {
          console.log(errorMsg, "pass");
          if (
            errorMsg ===
            "비밀번호는 8자 이상의 영문 대소문자와 숫자, 특수문자를 포함하여야 합니다."
          ) {
            console.log("true");
            setNewPassword("유효한 비밀번호가 아닙니다.");
          } else {
            setNewPassword("비밀번호가 일치하지 않습니다.");
          }
        });
      }
    },
  });
};
