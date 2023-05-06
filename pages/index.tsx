import RecipeList from "@/components/Recipe/RecipeList";
import { Container } from "@mantine/core";

const Home = () => {
  return (
    <Container py={100}>
      <RecipeList />
    </Container>
  );
};

export default Home;
