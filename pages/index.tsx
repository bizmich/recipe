import RecipeList from "@/components/Recipe/RecipeList";
import RecipeSetting from "@/components/Recipe/RecipeSetting";
import { Container, Title } from "@mantine/core";

const Home = () => {
  return (
    <Container py={100}>
      <RecipeSetting />
      <RecipeList />
    </Container>
  );
};

export default Home;
