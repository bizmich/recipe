import { Comment } from "@/types/interfaces";
import { Button, Paper, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import useCreateComment from "../react-query/hooks/Comments/useCreateComment";

const CommentForm = ({ id }: { id: string | undefined }) => {
  const form = useForm<Comment>({
    initialValues: {
      name: "",
      email: "",
      comment: "",
      recipeId: id ?? "",
    },
  });

  const createComment = useCreateComment(() => {
    form.reset();
  });

  return (
    <Paper maw="60%" mx="auto" shadow="md" radius="xs" p="md">
      <form
        onSubmit={form.onSubmit((value) => createComment.mutate(value))}
        className="space-y-3"
      >
        <TextInput
          required
          placeholder="Ваше имя"
          {...form.getInputProps("name")}
          label="Ваше имя"
          withAsterisk
        />

        <TextInput
          required
          placeholder="Ваша почта"
          type="email"
          label="Почта"
          withAsterisk
          {...form.getInputProps("email")}
        />

        <Textarea
          required
          label="Комментарии"
          placeholder="Добавить комментарии"
          withAsterisk
          {...form.getInputProps("comment")}
        />
        <div className="flex justify-end mt-5 gap-x-3">
          <Button loading={createComment.isLoading} type="submit">
            Добавить
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default CommentForm;
