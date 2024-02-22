import { useMutation } from "@tanstack/react-query";
import { userLogout } from "../api/users";

export const useLogoutMutation = () => {
  // const navigate = useNavigate();
  return useMutation({
    mutationFn: userLogout,
  });
};
