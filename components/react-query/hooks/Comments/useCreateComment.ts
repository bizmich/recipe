import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../../state-management/services/apiClient";
import { Comment, Recipe } from "@/types/interfaces";

const apiClient = new APIClient<Comment>("/api/comment");
const useCreateComment = (onSuccess?: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<Comment, Error, Comment>({
    mutationFn: (data: Comment) => apiClient.post(data),
    onMutate: (createComment: Comment) => {
      queryClient.setQueryData<Recipe>(["recipe"], (data) => {
        if (data)
          return {
            ...data,
            comments: [createComment, ...(data?.comments || [])],
          };
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["recipe"],
      });
      if (onSuccess) onSuccess();
    },
  });
};
export default useCreateComment;
