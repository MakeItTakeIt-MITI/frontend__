import { useMutation } from "@tanstack/react-query";
import { deleteAccount } from "../api/users";
import { useNavigate } from "react-router-dom";

export const useDeleteAccMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: deleteAccount,
    onSuccess: () => {
      navigate("/login");
    },
  });
};
