import { useMutation } from "@tanstack/react-query";
import { userLoginAuth } from "../api/users";
import useAuthStore from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

interface ErrorField {
  setErrorMessage: () => void;
}

export const useLoginMutation = ({ setErrorMessage }: ErrorField) => {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: userLoginAuth,
    onSuccess: () => {
      login();
      navigate("/");
    },
    onError: (error) => {
      if (error.response.data) {
        console.log(error.response.data.data.detail);
        setErrorMessage(error.response.data.data.detail);
      }
    },
  });
};
