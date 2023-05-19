import CommentForm from "@/components/Comments/CommentForm";
import CommentsList from "@/components/Comments/CommentsList";
import RecipePreviewCard from "@/components/RecipePreview/RecipePreviewCard";
import useDeleteSingleRecipe from "@/components/react-query/hooks/useDeleteSingleRecipe";
import useSingleRecipe from "@/components/react-query/hooks/useSingleRecipe";
import { Container } from "@mantine/core";
import { useRouter } from "next/router";

function RecipePreviewPage() {
  const router = useRouter();
  const { data, error, isLoading } = useSingleRecipe(
    router?.query?.id as string
  );

  const deleteRecipe = useDeleteSingleRecipe(() => {
    router.push("/");
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <section className="bg-gray-50">
      <Container py={60} className="space-y-10 ">
        {data && (
          <RecipePreviewCard onDelete={deleteRecipe.mutate} data={data} />
        )}
        {data && <CommentForm id={data?.id} />}
        {data && <CommentsList comments={data?.comments || []} />}
      </Container>
    </section>
  );
}
export default RecipePreviewPage;
