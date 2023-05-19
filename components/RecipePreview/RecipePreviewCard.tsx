import { Recipe } from "@/types/interfaces";
import { Image, Card, Group, Badge, List, Button, Text } from "@mantine/core";
import { useRouter } from "next/router";
import useStore from "../react-query/state-management/store";
import { openModal } from "../Utils/DeleteConfirmAlert";

const RecipePreviewCard = ({
  data,
  onDelete,
}: {
  data: Recipe;
  onDelete: (id: string) => void;
}) => {
  console.log("data:", data);

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
          {data.name}
        </Text>
        <Badge>{data.createdDate}</Badge>
      </Group>

      <Text weight={500}>Description</Text>

      <Text size="sm" color="dimmed">
        {data.description}
      </Text>

      <Text weight={500} mt={15}>
        Ingredients
      </Text>
      <List size={14} withPadding>
        {data.ingredient?.map((i) => {
          return <List.Item key={i}>{i}</List.Item>;
        })}
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
      <Button
        variant="filled"
        onClick={() =>
          openModal(() => {
            onDelete(data.id as string);
          })
        }
        color="red"
        fullWidth
        mt="md"
        radius="md"
      >
        Delete
      </Button>
    </Card>
  );
};

export default RecipePreviewCard;
