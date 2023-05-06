import RecipeForm from "@/components/Recipe/RecipeForm";
import { Container } from "@mantine/core";

const AddRecipe = () => {
  return (
    <Container
      py={120}
      maw="100%"
      className="flex items-center justify-center bg-gray-50"
    >
      <RecipeForm />
    </Container>
  );
};

export default AddRecipe;
