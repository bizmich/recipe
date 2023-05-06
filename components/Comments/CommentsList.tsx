import { Paper, Title } from "@mantine/core";
import { CommentCard } from "./CommentsCard";

const CommentsList = () => {
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
      <CommentCard
        author={{
          name: "Jacob Warnhalter",
          image:
            "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        }}
        postedAt="10 minutes ago"
        body="I use Heroku to host my Node.js application, but MongoDB add-on appears to be too expensive. I consider switching to Digital Ocean VPS to save some cash."
      />
      <CommentCard
        author={{
          name: "Jacob Warnhalter",
          image:
            "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        }}
        postedAt="10 minutes ago"
        body="I use Heroku to host my Node.js application, but MongoDB add-on appears to be too expensive. I consider switching to Digital Ocean VPS to save some cash."
      />
      <CommentCard
        author={{
          name: "Jacob Warnhalter",
          image:
            "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        }}
        postedAt="10 minutes ago"
        body="I use Heroku to host my Node.js application, but MongoDB add-on appears to be too expensive. I consider switching to Digital Ocean VPS to save some cash."
      />
    </Paper>
  );
};

export default CommentsList;
