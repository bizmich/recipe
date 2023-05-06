import { Image, Card, Group, Badge, List, Button, Text } from "@mantine/core";
import { useRouter } from "next/router";

const RecipePreviewCard = () => {
  const { push } = useRouter();
  return (
    <Card shadow="sm" maw="60%" mx="auto" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://plus.unsplash.com/premium_photo-1663852297496-c427a58e98c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          height={350}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text size="lg" weight={500}>
          Борщ с говядиной
        </Text>
        <Badge>10 minutes ago</Badge>
      </Group>

      <Text weight={500}>Description</Text>

      <Text size="sm" color="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>

      <Text weight={500} mt={15}>
        Ingredients
      </Text>
      <List size={14} withPadding>
        <List.Item>Говядина - 500 г</List.Item>
        <List.Item>Свёкла - 1 шт.</List.Item>
        <List.Item>Картофель - 2 шт.</List.Item>
        <List.Item>Капуста белокочанная - 200 г</List.Item>
        <List.Item>Морковь - 1 шт.</List.Item>
        <List.Item>Лук репчатый - 1 шт.</List.Item>
        <List.Item>Томатная паста - 1 ст. ложка</List.Item>
      </List>

      <Button
        variant="light"
        onClick={() => push("/edit-recipe/4")}
        color="blue"
        fullWidth
        mt="md"
        radius="md"
      >
        Edit
      </Button>
      <Button variant="filled" color="red" fullWidth mt="md" radius="md">
        Delete
      </Button>
    </Card>
  );
};

export default RecipePreviewCard;
