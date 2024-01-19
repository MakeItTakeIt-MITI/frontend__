import { useMutation } from "@tanstack/react-query";
import { userLoginAuth } from "../api/users";
import useAuthStore from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

export const useLoginMutation = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: userLoginAuth,
    onSuccess: () => {
      login();
      navigate("/");
    },
  });
};
