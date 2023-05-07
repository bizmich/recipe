import CommentForm from "@/components/Comments/CommentForm";
import CommentsList from "@/components/Comments/CommentsList";
import RecipePreviewCard from "@/components/RecipePreview/RecipePreviewCard";
import useStore from "@/components/react-query/state-management/store";
import { Container } from "@mantine/core";
import { useRouter } from "next/router";

function RecipePreviewPage() {
  const router = useRouter();
  const queryId: string = (router.query.id as string) || "";

  const recipe = useStore((s) => s.recipe.find((i) => i.id == queryId));

  return (
    <section className="bg-gray-50">
      <Container py={60} className="space-y-10 ">
        {recipe && <RecipePreviewCard data={recipe} />}
        <CommentForm />
        <CommentsList />
      </Container>
    </section>
  );
}
export default RecipePreviewPage;
