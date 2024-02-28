import { useMutation } from "@tanstack/react-query";
import useAuthStore from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useUserDataStore from "../store/useUserDataStore";
import { userLogin } from "../api/auth";

interface ErrorMsgProps {
  setErrorMessage: (arg: string) => void;
}

export const useLoginMutation = ({ setErrorMessage }: ErrorMsgProps) => {
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const { setUserId } = useUserDataStore();

  return useMutation({
    mutationFn: userLogin,
    onSuccess: (data) => {
      if (data?.status_code === 200) {
        const accessToken = data.data.token.access;
        const refreshToken = data.data.token.refresh;
        const userId = data.data.id;
        setUserId(userId);
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("id", userId);
        login();
        navigate("/");
      }
    },
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response) {
        setErrorMessage(error.response.data.data.detail);
      }
    },
  });
};
