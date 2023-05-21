import { useMutation } from "@tanstack/react-query";
import APIClient from "../state-management/services/apiClient";

const apiClient = new APIClient<Record<string, string>>("/api/recipe");

const useUpdateRecipe = (id: string, onSuccess?: () => void) => {
  return useMutation({
    mutationFn: (data: FormData) =>
      apiClient.put(id, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    onSuccess: () => {
      if (onSuccess) onSuccess();
    },
  });
};

export default useUpdateRecipe;
