import { useQuery } from "@tanstack/react-query";
import { getUserData } from "../../api/users";

export const useGetUserDataQuery = (userId: number | null) => {
  return useQuery({
    queryKey: ["User Data"],
    queryFn: () => getUserData(userId),
  });
};
