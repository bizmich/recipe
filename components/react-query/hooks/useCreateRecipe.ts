import { useMutation } from "@tanstack/react-query";
import APIClient from "../state-management/services/apiClient";

const apiClient = new APIClient<Record<string, string>>("/api/recipe");

const useCreateRecipe = () => {
  return useMutation({
    mutationFn: (data: FormData) =>
      apiClient.post(data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
  });
};

export default useCreateRecipe;
