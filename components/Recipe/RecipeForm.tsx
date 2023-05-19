import { Recipe } from "@/types/interfaces";
import {
  Button,
  FileButton,
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
import useStore from "../react-query/state-management/store";
import { useRouter } from "next/router";
import useUploadImage from "../react-query/hooks/useUploadImage";

const RecipeForm = () => {
  const uuid = useId();
  const { push } = useRouter();
  const { postRecipe, recipe } = useStore();

  console.log("recipe:", recipe);

  const form = useForm<Partial<Recipe>>({
    initialValues: {
      name: "",
      cookingTime: 0,
      description: "",
      ingredient: "",
      image: null,
    },

    validate: {
      name: (value) => (value !== "" ? null : "Invalid name"),
      description: (value) => (value !== "" ? null : "Invalid name"),
      image: (value) => (value !== null ? null : "pick an image"),
    },
  });
  console.log(form.values);

  const uploadImage = useUploadImage((image) => {
    form.setValues((prev) => ({ ...prev, image: image.fileName }));
  });
  return (
    <Paper className="w-full py-10 lg:w-1/3" shadow="xl" p={20}>
      <Title align="center" order={1} size={25} mb={25}>
        Добавить блюдо
      </Title>
      <form
        className="space-y-3"
        onSubmit={form.onSubmit((value) => {
          console.log("value:", value);

          uploadImage.mutate({
            file: value?.image,
          });

          form.reset();
          push("/");
        })}
      >
        <FileButton
          {...form.getInputProps("image")}
          accept="image/png,image/jpeg"
          multiple
        >
          {(props) => <Button {...props}>Upload image</Button>}
        </FileButton>
        <TextInput
          withAsterisk
          label="Name"
          placeholder="Your name"
          {...form.getInputProps("name")}
        />

        <NumberInput
          icon={<IconClockHour10 />}
          min={1}
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
