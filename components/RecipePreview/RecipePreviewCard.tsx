import { Recipe } from "@/types/interfaces";
import { Badge, Button, Card, Group, Image, List, Text } from "@mantine/core";
import { useRouter } from "next/router";
import { openModal } from "../Utils/DeleteConfirmAlert";
import getCroppedImageUrl from "../Utils/getCroppedImageUrl";

const RecipePreviewCard = ({
  data,
  onDelete,
}: {
  data: Recipe;
  onDelete: (id: string) => void;
}) => {
  const { push } = useRouter();
  return (
    <Card shadow="sm" maw="60%" mx="auto" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={getCroppedImageUrl(data.image as string)}
          height={350}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text size="lg" weight={500}>
          {data.name as string}
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
        {Array.isArray(data.ingredient) &&
          data?.ingredient?.map((i) => {
            return <List.Item key={i}>{i}</List.Item>;
          })}
      </List>

      <Button
        variant="light"
        onClick={() => push(`/edit-recipe/${data.id}`)}
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
