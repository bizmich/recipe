import { Comment } from "@/types/interfaces";
import { Button, Paper, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";

const CommentForm = () => {
  const form = useForm<Partial<Comment>>({
    initialValues: {
      name: "",
      email: "",
      comment: "",
    },
  });

  return (
    <Paper maw="60%" mx="auto" shadow="md" radius="xs" p="md">
      <form
        onSubmit={form.onSubmit((value) => console.log(value))}
        className="space-y-3"
      >
        <TextInput
          required
          placeholder="Your name"
          {...form.getInputProps("name")}
          label="Full name"
          withAsterisk
        />

        <TextInput
          required
          placeholder="Your email"
          type="email"
          label="Email"
          withAsterisk
          {...form.getInputProps("email")}
        />

        <Textarea
          required
          label="Comment"
          withAsterisk
          {...form.getInputProps("comment")}
        />
        <div className="flex justify-end mt-5 gap-x-3">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Paper>
  );
};

export default CommentForm;
