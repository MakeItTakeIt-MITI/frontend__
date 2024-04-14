import { useMutation } from "@tanstack/react-query";
import useAuthStore from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import useUserDataStore from "../../store/useUserDataStore";
import { userLogin } from "../../api/auth";

export const useLoginMutation = (
  displayModal: (arg: boolean) => void,
  setErrorCode: (arg: number) => void,
  setErrorMsg: (arg: string) => void
) => {
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const { setUserId } = useUserDataStore();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: userLogin,
    onSuccess: (response) => {
      console.log(response);

      const errorCode = response.error_code;

      if (errorCode) {
        displayModal(true);
        if (errorCode === 101) {
          setErrorCode(101);
          setErrorMsg("사용자 정보가 일치하지 않습니다.");
        } else if (errorCode === 201) {
          setErrorCode(201);
          setErrorMsg("탍퇴한 사용자입니다. 고겍센터에 문의해주세요.");
        } else if (errorCode === 301) {
          setErrorCode(301);
          setErrorMsg("미인증 사용자입니다.");
        }
        return;
      }

      if (response?.status_code === 200) {
        const { access, refresh } = response.data.token;
        const userId = response.data.id;
        setUserId(userId);
        localStorage.setItem("accessToken", access);
        localStorage.setItem("refreshToken", refresh);
        // localStorage.setItem("id", userId);
        login();
        navigate("/");
      }

      if (response.data) {
        console.log(response.data.data);
      }
    },
  });
};
