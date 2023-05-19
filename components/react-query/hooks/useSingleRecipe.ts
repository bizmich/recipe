import { Recipe } from "@/types/interfaces";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../state-management/services/apiClient";

const apiClient = new APIClient<Recipe>("/api/recipe");

const useSingleRecipe = (id: string) => {
  return useQuery<Recipe, Error>({
    queryKey: ["recipe-list"],
    queryFn: () => apiClient.getById(id),
  });
};
export default useSingleRecipe;
