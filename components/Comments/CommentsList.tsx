import { Paper, Title } from "@mantine/core";
import { CommentCard } from "./CommentsCard";
import { Comment } from "@/types/interfaces";
import useDeleteComment from "../react-query/hooks/Comments/useDeleteComment";

const CommentsList = ({ comments }: { comments: Comment[] }) => {
  const deleteComment = useDeleteComment();

  return (
    <Paper
      maw="60%"
      mx="auto"
      shadow="md"
      radius="xs"
      p="md"
      className="space-y-5"
    >
      <Title order={2}>Comments</Title>
      {comments.length > 0 ? (
        comments.map((com) => {
          return (
            <CommentCard
              key={com.id}
              author={{
                name: com.name,
              }}
              id={com.id as string}
              postedAt={com.commentedAt as string}
              body={com.comment}
              onDelete={deleteComment.mutate}
            />
          );
        })
      ) : (
        <p className="py-10 text-center">
          No comments yet, be the one to add first
        </p>
      )}
    </Paper>
  );
};

export default CommentsList;
