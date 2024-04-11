import { useQuery } from "@tanstack/react-query";
import { getUserData } from "../../api/users";

export const useUserInfoQuery = (userId: number | null) => {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserData(userId),
    retry: 1,
  });
};
