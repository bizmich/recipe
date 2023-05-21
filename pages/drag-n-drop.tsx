import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import { SortableItem } from "@/components/DragNDrop/SortableItem";
import { Container } from "@mantine/core";

function DrangAndDrop() {
  const [languages, setLanguages] = useState<string[]>([
    "JavaScript",
    "Python",
    "TypeScript",
  ]);

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <Container className="p-3" style={{ width: "50%" }}>
        <h3>Drag n Drop</h3>
        <SortableContext
          items={languages}
          strategy={verticalListSortingStrategy}
        >
          {languages.map((language) => (
            <SortableItem key={language} id={language} />
          ))}
        </SortableContext>
      </Container>
    </DndContext>
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over?.id) {
      setLanguages((items) => {
        const activeIndex = items.indexOf(active.id.toString());
        const overIndex = items.indexOf(over.id.toString());
        console.log(arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }
}

export default DrangAndDrop;
