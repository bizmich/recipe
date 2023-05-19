import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../../state-management/services/apiClient";
import { Comment, Recipe } from "@/types/interfaces";

const apiClient = new APIClient<Comment>("/api/comment");
const useDeleteComment = () => {
  const queryClient = useQueryClient();
  return useMutation<string, Error, string>({
    mutationFn: (id: string) => apiClient.delete(id),
    onMutate: (id: string) => {
      queryClient.setQueryData<Recipe>(["recipe"], (data) => {
        if (data)
          return {
            ...data,
            comments: data.comments?.filter((com) => com.id !== id),
          };
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["recipe"],
      });
    },
  });
};
export default useDeleteComment;
