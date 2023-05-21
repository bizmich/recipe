import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Paper } from "@mantine/core";

export function SortableItem(props: { id: string }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      className="space-y-3"
      style={style}
      {...attributes}
      {...listeners}
    >
      <Paper className="cursor-pointer" shadow="xs" p="md" my="md">
        {props.id}
      </Paper>
    </div>
  );
}
