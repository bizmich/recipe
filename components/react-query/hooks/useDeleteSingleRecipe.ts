import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useDeleteSingleRecipe = (onSuccess: () => void) => {
  return useMutation<Record<string, string>, Error, string>({
    mutationFn: (id: string) =>
      axios.delete(`http://localhost:3001/recipe/${id}`),
    onSuccess: () => {
      onSuccess();
    },
  });
};
export default useDeleteSingleRecipe;
