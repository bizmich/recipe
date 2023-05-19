import { Recipe } from "@/types/interfaces";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useSingleRecipe = (id: string | number | undefined) => {
  return useQuery<Recipe, Error>({
    queryKey: ["recipe-list"],
    queryFn: () =>
      axios
        .get<Recipe>(`http://localhost:3001/recipe/${id}`)
        .then((res) => res.data),
  });
};
export default useSingleRecipe;
