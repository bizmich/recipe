import { Carousel } from "@mantine/carousel";
import { rem, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { CarouselCard } from "./CarouselCard";
import useRecipeList from "@/components/react-query/hooks/useRecipeList";

export function CardsCarousel() {
  const { data, isLoading } = useRecipeList();

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides =
    data &&
    data.list?.map((item) => (
      <Carousel.Slide key={item.id}>
        <CarouselCard
          comments={item.comments as []}
          image={item.image as string}
          ingredients={item.ingredient as []}
          name={item.name as string}
          views={item.viewCount as number}
        />
      </Carousel.Slide>
    ));

  if (isLoading) return null;
  return (
    <Carousel
      slideSize="30%"
      breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      loop
      slidesToScroll={mobile ? 1 : 3}
    >
      {slides}
    </Carousel>
  );
}
