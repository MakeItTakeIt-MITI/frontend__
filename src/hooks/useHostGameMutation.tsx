import { useMutation } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";
import { hostGame } from "../api/games";

export const useHostGameMutation = () => {
  // const navigate = useNavigate();
  return useMutation({
    mutationFn: hostGame,
    onSuccess: (response) => {
      // navigate("/");
      if (response.status_code === 201) {
        console.log("created");
        console.log(response.data);
      }
      if (response.status_code === 400) {
        console.log("401 : 경기 정보 유효성 검증 실패");
      }
      if (response.status_code === 401) {
        console.log("401 access token error");
      }
    },
    onError: (error) => {
      console.log("Error Hosting", error);
    },
  });
};
