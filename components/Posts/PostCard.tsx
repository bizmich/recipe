import { HoverCard, Button, Text, Group } from "@mantine/core";
interface Props {
  description: string;
  title: string;
}
const PostCard = ({ title, description }: Props) => {
  return (
    <Group position="center">
      <HoverCard width={"50%"} shadow="md">
        <HoverCard.Target>
          <Button variant="subtle" w="50%">
            {title}
          </Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">{description}</Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
};
export default PostCard;
