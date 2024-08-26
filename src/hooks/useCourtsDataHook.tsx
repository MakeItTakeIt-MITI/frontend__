import { useQuery } from "@tanstack/react-query";
import { getAllGames } from "../api/games";

interface CourtsDataProps {
  city: string;
}

export const useCourtsDataHook = ({ city }: CourtsDataProps) => {
  return useQuery({
    queryKey: ["courtss list", city],
    queryFn: () => getAllGames(city),
  });
};
