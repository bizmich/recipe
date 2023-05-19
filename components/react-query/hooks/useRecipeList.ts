import { FetchResponse, Recipe } from "@/types/interfaces";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import APIClient from "../state-management/services/apiClient";

const apiClient = new APIClient<FetchResponse<Recipe>>("/api/recipe");

const useRecipeList = () => {
  return useQuery<FetchResponse<Recipe>, Error>({
    queryKey: ["recipe-list"],
    queryFn: apiClient.get,
  });
};
export default useRecipeList;
