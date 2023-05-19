import { FetchResponse, Recipe } from "@/types/interfaces";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useRecipeList = () => {
  return useQuery<FetchResponse<Recipe>, Error>({
    queryKey: ["recipe-list"],
    queryFn: () =>
      axios
        .get<FetchResponse<Recipe>>("http://localhost:3001/recipe")
        .then((res) => res.data),
  });
};
export default useRecipeList;
