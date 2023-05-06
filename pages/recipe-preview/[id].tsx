import CommentForm from "@/components/Comments/CommentForm";
import { CommentCard } from "@/components/Comments/CommentsCard";
import CommentsList from "@/components/Comments/CommentsList";
import RecipePreviewCard from "@/components/RecipePeview/RecipePreviewCard";
import { Container } from "@mantine/core";

function RecipePreviewPage() {
  return (
    <section className="bg-gray-50">
      <Container py={60} className="space-y-10 ">
        <RecipePreviewCard />
        <CommentForm />
        <CommentsList />
      </Container>
    </section>
  );
}
export default RecipePreviewPage;
