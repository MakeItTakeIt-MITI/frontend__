import { useMutation } from "@tanstack/react-query";
import { authorizeExistingUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export const useAuthorizeExistingUserMutation = (
  setErrorResponse: (arg: string) => void
) => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["authorize existing user"],
    mutationFn: authorizeExistingUser,
    onSuccess: (response) => {
      console.log(response);
      if (response.status_code === 201) {
        localStorage.setItem(
          "authentication_token",
          response.data.authentication_token
        );
        navigate("/sms-authentication");
      }

      if (response.error_code == 301) {
        setErrorResponse("이미 인증을 완료한 사용저입니다.");
      }

      if (response.status_code == 401) {
        setErrorResponse("일치하는 사용자가 없습니다.");
      }
    },
  });
};
