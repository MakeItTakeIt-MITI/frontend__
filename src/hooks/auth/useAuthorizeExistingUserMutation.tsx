import { useMutation } from "@tanstack/react-query";
import { authorizeExistingUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export const useAuthorizeExistingUserMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["authorize existing user"],
    mutationFn: authorizeExistingUser,
    onSuccess: (response) => {
      if (response.status_code === 201) {
        localStorage.setItem(
          "authentication_token",
          response.data.authentication_token
        );
        navigate("/auth/sms-authentication");
      }
    },
  });
};
