import { Recipe } from "@/types/interfaces";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../state-management/services/apiClient";

const apiClient = new APIClient<Recipe>("/api/recipe");

const useSingleRecipe = (id: string) => {
  return useQuery<Recipe, Error>({
    queryKey: ["recipe"],
    queryFn: () => apiClient.getById(id),
    refetchOnWindowFocus: false,
    staleTime: 60 * 60 * 1000,
  });
};
export default useSingleRecipe;
