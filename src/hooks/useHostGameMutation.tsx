import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { hostGame } from "../api/games";

export const useHostGameMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: hostGame,
    onSuccess: () => {
      navigate("/");
    },
    onError: (error) => {
      console.log("Error Hosting", error);
    },
  });
};
