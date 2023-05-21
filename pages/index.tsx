import { CardsCarousel } from "@/components/Recipe/CarouselCard/CardsCarousel";
import RecipeList from "@/components/Recipe/RecipeList";
import RecipeSetting from "@/components/Recipe/RecipeSetting";

import { Container, Title } from "@mantine/core";

const Home = () => {
  return (
    <Container py={50}>
      <Title order={2}>Популярные блюда</Title>
      <div className="my-10">
        <CardsCarousel />
      </div>
      <RecipeSetting />
      <RecipeList />
    </Container>
  );
};

export default Home;
