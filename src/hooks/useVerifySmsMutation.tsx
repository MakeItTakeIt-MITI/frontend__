import { useMutation } from "@tanstack/react-query";
import { verifySignupSMS } from "../api/auth";
import { SMSAuth } from "../interface/authInterface";

export const useVerifySmsMutation = (auth_token: string | null) => {
  // const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: SMSAuth) => verifySignupSMS(auth_token, data),
    onSuccess: () => {
      localStorage.removeItem("authentication_token");
    },
  });
};
