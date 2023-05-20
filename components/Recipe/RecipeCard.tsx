import { Recipe } from "@/types/interfaces";
import { Button, Card, Group, List, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const RecipeCard = ({ name, ingredient, id, image }: Partial<Recipe>) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image
          src={`${process.env.BASE_URL}/uploads/${image}`}
          height={160}
          width={320}
          alt="Norway"
          className="object-cover"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500} className="line-clamp-1">
          {name}
        </Text>
      </Group>

      <List size={14} className="line-clamp-4">
        {Array.isArray(ingredient) &&
          ingredient?.map((i, idx) => {
            return <List.Item key={idx}>{i}</List.Item>;
          })}
      </List>
      <Link href={`/recipe-preview/${id}`} className="no-underline">
        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Preview
        </Button>
      </Link>
    </Card>
  );
};

export default RecipeCard;
