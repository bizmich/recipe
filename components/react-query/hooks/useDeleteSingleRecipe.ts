import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import APIClient from "../state-management/services/apiClient";

const apiClient = new APIClient<string>("/api/recipe/");

const useDeleteSingleRecipe = (onSuccess: () => void) => {
  return useMutation<Record<string, string>, Error, string>({
    mutationFn: (id: string) => apiClient.delete(id),
    onSuccess: () => {
      onSuccess();
    },
  });
};
export default useDeleteSingleRecipe;
