import { Recipe } from "@/types/interfaces";
import { Button, Card, Group, List, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const RecipeCard = ({ name, ingredient, id }: Partial<Recipe>) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
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
        {ingredient?.map((i, idx) => {
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
