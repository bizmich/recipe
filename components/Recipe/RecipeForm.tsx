import { Recipe } from "@/types/interfaces";
import {
  Button,
  Container,
  FileInput,
  NumberInput,
  Paper,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useId } from "@mantine/hooks";
import { IconClockHour10 } from "@tabler/icons-react";

const RecipeForm = () => {
  const uuid = useId();

  const form = useForm<Partial<Recipe>>({
    initialValues: {
      name: "",
      cookingTime: 0,
      description: "",
      ingredient: "",
      image: null,
      createdDate: new Date().toISOString(),
      comment: [],
    },

    validate: {
      name: (value) => (value !== "" ? null : "Invalid name"),
      description: (value) => (value !== "" ? null : "Invalid name"),
      image: (value) => (value !== null ? null : "pick an image"),
    },
  });

  return (
    <Container
      py={120}
      maw="100%"
      className="flex items-center justify-center bg-gray-50"
    >
      <Paper className="py-10 w-full lg:w-1/3" shadow="xl" p={20}>
        <form
          className="space-y-3"
          onSubmit={form.onSubmit((value) =>
            console.log({
              name: value.name,
              cookingTime: value.cookingTime,
              description: value.description,
              ingredient: (value.ingredient as string)?.split(","),
              image: value.image,
              id: uuid,
            })
          )}
        >
          <TextInput
            withAsterisk
            label="Name"
            placeholder="Your name"
            {...form.getInputProps("name")}
          />

          <NumberInput
            icon={<IconClockHour10 />}
            min={0}
            label="Cooking time"
            placeholder="Cooking time"
            {...form.getInputProps("cookingTime")}
          />

          <TextInput
            withAsterisk
            label="Ingredient"
            placeholder="Ingredient"
            required
            {...form.getInputProps("ingredient")}
          />
          <FileInput required label="Image" {...form.getInputProps("image")} />

          <Textarea
            label="Description"
            {...form.getInputProps("description")}
          />

          <div className="flex gap-x-3 justify-end">
            <Button type="submit">Add</Button>
            <Button type="button" onClick={() => form.reset()}>
              Reset
            </Button>
          </div>
        </form>
      </Paper>
    </Container>
  );
};

export default RecipeForm;
