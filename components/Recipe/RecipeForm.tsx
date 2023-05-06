import { Recipe } from "@/types/interfaces";
import {
  Button,
  FileInput,
  NumberInput,
  Paper,
  TextInput,
  Textarea,
  Title,
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
    <Paper className="w-full py-10 lg:w-1/3" shadow="xl" p={20}>
      <Title align="center" order={1} size={25} mb={25}>
        Добавить блюду
      </Title>
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
          label="Ingredient  (separated by comma)"
          placeholder="Ingredient"
          required
          {...form.getInputProps("ingredient")}
        />
        <FileInput
          placeholder="Choose an image"
          required
          label="Image"
          {...form.getInputProps("image")}
        />

        <Textarea label="Description" {...form.getInputProps("description")} />

        <div className="flex justify-end gap-x-3">
          <Button type="submit">Add</Button>
          <Button type="button" onClick={() => form.reset()}>
            Reset
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default RecipeForm;
