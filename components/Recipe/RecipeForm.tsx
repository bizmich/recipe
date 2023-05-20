import { Recipe } from "@/types/interfaces";
import {
  Button,
  FileButton,
  NumberInput,
  Paper,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconClockHour10 } from "@tabler/icons-react";
import { useRouter } from "next/router";
import useCreateRecipe from "../react-query/hooks/useCreateRecipe";
import axios from "axios";
import { UploadImage } from "../Utils/UploadImage";

const RecipeFrom = () => {
  const { push } = useRouter();

  const createRecipe = useCreateRecipe();

  const recipeFrom = useForm<Recipe>({
    initialValues: {
      description: "",
      cookingTime: 0,
      name: "",
      ingredient: [],
      image: "",
    },
    validate: {
      name: (value) => (value !== "" ? null : "Пожалуйста введите имя"),
      description: (value) =>
        value !== "" ? null : "Пожалуйста добавьте описание",
      image: (value) => (value !== "" ? null : "Пожалуйста выберите фото"),
      ingredient: (value) =>
        value?.length !== 0 ? null : "Пожалуйста добавьте ингридиенты",
      cookingTime: (value) =>
        value > 0 ? null : "Пожалуйста укажите время в минутах",
    },
  });

  const handleSubmit = (value: Recipe) => {
    const readyForm = new FormData();
    if (value.image) readyForm.append("image", value.image[0]);
    if (value.ingredient)
      readyForm.append("ingredient", value.ingredient as string);
    if (value.description) readyForm.append("description", value.description);
    if (value.cookingTime)
      readyForm.append("cookingTime", value.cookingTime.toString());
    if (value.cookingTime) readyForm.append("name", value.name);

    createRecipe.mutate(readyForm);
  };

  return (
    <Paper className="w-full py-10 lg:w-1/3" shadow="xl" p={20}>
      <Title align="center" order={1} size={25} mb={25}>
        Добавить блюдо
      </Title>
      <form className="space-y-3" onSubmit={recipeFrom.onSubmit(handleSubmit)}>
        <UploadImage file={recipeFrom} />

        <TextInput
          label="Название"
          placeholder="Название"
          {...recipeFrom.getInputProps("name")}
        />

        <NumberInput
          icon={<IconClockHour10 />}
          min={1}
          label="Время приготовления"
          placeholder="Cooking time"
          {...recipeFrom.getInputProps("cookingTime")}
        />

        <TextInput
          withAsterisk
          label="Ингридиенты  (разделить запятой)"
          placeholder="Ингридиенты"
          {...recipeFrom.getInputProps("ingredient")}
        />

        <Textarea
          label="Описание"
          {...recipeFrom.getInputProps("description")}
        />

        <div className="flex justify-end gap-x-3">
          <Button type="submit">Add</Button>
          <Button type="button" onClick={() => recipeFrom.reset()}>
            Reset
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default RecipeFrom;
