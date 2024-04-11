import { useQuery } from "@tanstack/react-query";
import { requestPasswordAuthenCode } from "../../api/auth";

export const useGetPassAuthCodeQuery = (auth_token: string | null) => {
  return useQuery({
    queryKey: ["new_passoword_authentication_code"],
    queryFn: () => requestPasswordAuthenCode(auth_token),
  });
};
