import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { userSignup } from "../../api/auth";

export const useRegisterMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: userSignup,
    onSuccess: (response) => {
      console.log(response);

      if (response.status_code === 201) {
        const auth_code = response.authentication_token;
        localStorage.setItem("authentication", auth_code);
        navigate("/sms-authentication");
      }
    },
  });
};
