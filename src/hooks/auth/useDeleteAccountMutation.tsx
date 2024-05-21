import { useMutation } from "@tanstack/react-query";
import { deleteAccount } from "../../api/auth";

export const useDeleteAccountMutation = () => {
  return useMutation({
    mutationFn: deleteAccount,
    onSuccess: (response) => {
      if (response.status_code === 200) {
        localStorage.clear();
        window.location.reload();
      }
    },
  });
};
