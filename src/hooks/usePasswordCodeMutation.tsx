import { useMutation } from "@tanstack/react-query";
import { verifySignupSMS } from "../api/auth";
import { CodeVerificationField } from "../interface/authInterface";

export const usePasswordCodeMutation = (
  token: string | null,
  setSmsCodeError: (arg: number) => void,
  setSmsSuccessStatus: (arg: boolean) => void,
  setAuthorizationFailureMsg: (arg: string) => void,
  setModal: (arg: boolean) => void,
  setSmsFailureStatus: (arg: boolean) => void
) => {
  return useMutation({
    mutationKey: ["requestPasswordSMS"],
    mutationFn: (data: CodeVerificationField) => verifySignupSMS(token, data),
    onSuccess: (response) => {
      console.log(response);

      if (response.status_code === 200) {
        setSmsSuccessStatus(true);
        setSmsFailureStatus(false);
        localStorage.removeItem("auth");
        const authen_code = response.data.authentication_token;
        localStorage.setItem("new_auth", authen_code);
        setModal(true);
      }

      if (response.status_code === 400) {
        console.log("400");
        setSmsFailureStatus(true);
        setSmsSuccessStatus(false);
        setAuthorizationFailureMsg("유효한 인증번호가 아니에요.");
        if (response.error_code === 101) {
          setAuthorizationFailureMsg("유효한 인증번호가 아니에요.");
        } else if (response.error_code === 401) {
          setAuthorizationFailureMsg("요청 유효시간을 초괴하셨어요.");
        } else if (response.error_code === 901 || response.error_code === 902) {
          setAuthorizationFailureMsg(
            "유효하지 않는 토큰 입니다. 고객센터에 문의해주세요."
          );
        }
      }

      if (response.status_code === 403) {
        setSmsFailureStatus(true);
        setSmsSuccessStatus(false);
        console.log("403");
        if (response.error_code === 401) {
          setModal(true);
          setSmsCodeError(401);
        } else if (response.error_code === 402) {
          setModal(true);

          setSmsCodeError(402);
        } else if (
          response.status_code === 403 &&
          response.error_code === 403
        ) {
          setAuthorizationFailureMsg(
            "인증 시도 횟수를 초과하셨어요. 다시 요청해주세요."
          );
        }
      }
    },
  });
};
