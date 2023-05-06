import { Container } from "@mantine/core";
import { useRouter } from "next/router";

const RecipePreview = () => {
  const router = useRouter();
  return <Container>{router.query.id}</Container>;
};

export default RecipePreview;
