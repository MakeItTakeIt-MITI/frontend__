import { useMutation } from "@tanstack/react-query";
import { verifySignupSMS } from "../api/auth";
import { CodeVerificationField } from "../interface/authInterface";

export const useVerifySmsMutation = (
  auth_token: string | null,
  setError: (arg: boolean) => void,
  navigate: (arg: string) => void
) => {
  // const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: CodeVerificationField) =>
      verifySignupSMS(auth_token, data),
    onSuccess: (response) => {
      console.log(response);

      if (response.status_code === 200) {
        return navigate("/auth/login");
      }

      if (response.error_code && response.error_code === 102) {
        return setError(true);
      } else if (response.error_code === 901) {
        console.log("TOKEN ACCESS ERROR");
        return setError(true);
      }
    },
  });
};
