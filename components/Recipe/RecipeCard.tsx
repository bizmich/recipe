import { Badge, Button, Card, Group, List, Text } from "@mantine/core";
import Image from "next/image";

const RecipeCard = () => {
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
        <Text weight={500}>Борщ с говядиной</Text>
      </Group>

      <List size={14} className="line-clamp-4">
        <List.Item>Говядина - 500 г</List.Item>
        <List.Item>Свёкла - 1 шт.</List.Item>
        <List.Item>Картофель - 2 шт.</List.Item>
        <List.Item>Капуста белокочанная - 200 г</List.Item>
        <List.Item>Морковь - 1 шт.</List.Item>
        <List.Item>Лук репчатый - 1 шт.</List.Item>
        <List.Item>Томатная паста - 1 ст. ложка</List.Item>
      </List>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Preview
      </Button>
    </Card>
  );
};

export default RecipeCard;
