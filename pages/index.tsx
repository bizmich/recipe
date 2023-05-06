import RecipeList from "@/components/Recipe/RecipeList";
import { Container, Title } from "@mantine/core";

const Home = () => {
  return (
    <Container py={100}>
      <Title mb={40}>Recipes</Title>
      <RecipeList />
    </Container>
  );
};

export default Home;
