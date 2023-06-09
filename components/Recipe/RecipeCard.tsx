import { Recipe } from "@/types/interfaces";
import { Button, Card, Group, List, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import getCroppedImageUrl from "../Utils/getCroppedImageUrl";

const RecipeCard = ({ name, ingredient, id, image }: Partial<Recipe>) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section pos="relative" className="h-52 lg:h-48">
        <Image
          src={getCroppedImageUrl(image as string)}
          fill
          alt="Norway"
          className="object-cover"
        />
      </Card.Section>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500} className="line-clamp-1">
          {name}
        </Text>
      </Group>
      <List size={14} className="h-32 truncate whitespace-nowrap line-clamp-4">
        {Array.isArray(ingredient) &&
          ingredient?.map((i, idx) => {
            return <List.Item key={idx}>{i}</List.Item>;
          })}
      </List>
      <Link href={`/recipe-preview/${id}`} className="no-underline">
        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Просмотр
        </Button>
      </Link>
    </Card>
  );
};

export default RecipeCard;
