import { useMutation, useQuery } from "@tanstack/react-query";
import { kakaoAuthSMS } from "../api/auth";
import { requestSmsCode } from "../api/users";
import { RequestCodeField } from "../interface/usersInterface";
import { SMSAuth } from "../interface/authInterface";

export const useVerifySmsMutation = () => {
  return useMutation({
    mutationFn: (code: RequestCodeField) => requestSmsCode(code),
  });
};

export const useGetKakaoLogin = ({ code }) => {
  // const navigate = useNavigate();
  return useQuery({
    queryKey: ["kakaokey"],
    queryFn: () => kakaoAuthSMS(code),
  });
};
