import { useMutation } from "@tanstack/react-query";
import { userLogout } from "../api/users";
import { useNavigate } from "react-router-dom";

export const useLogoutMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: userLogout,
    onSuccess: (data) => {
      localStorage.clear();
      console.log(data);
      navigate("/");
    },
  });
};
