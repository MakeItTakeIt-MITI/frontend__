import { useMutation } from "@tanstack/react-query";
import { userSignup } from "../api/users";
import { useNavigate } from "react-router-dom";

export const useRegisterMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: userSignup,
    onSuccess: () => {
      navigate("/sms-authentication");
    },
    onError: (error) => {
      if (error) {
        console.log(error);
      }
    },
  });
};
