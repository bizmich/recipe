import UploadImage from "@/components/Utils/UploadImage";
import getCroppedImageUrl from "@/components/Utils/getCroppedImageUrl";
import useSingleRecipe from "@/components/react-query/hooks/useSingleRecipe";
import useUpdateRecipe from "@/components/react-query/hooks/useUpdateRecipe";
import { Recipe } from "@/types/interfaces";
import {
  Button,
  Container,
  LoadingOverlay,
  NumberInput,
  Paper,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconCircleCheckFilled, IconClockHour10 } from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

const RecipeEditPage = () => {
  const router = useRouter();
  const updateRecipe = useUpdateRecipe(router?.query?.edit as string, () => {
    notifications.show({
      title: "Удачно",
      message: "Блюдо обновлен!",
      icon: <IconCircleCheckFilled />,
      color: "green",
    });
  });
  const { data, isLoading } = useSingleRecipe(
    router.query.edit as string,
    router.isReady
  );

  const form = useForm<Recipe>({
    initialValues: {
      description: "",
      name: "",
      cookingTime: 0,
      image: "",
    },
    validate: {
      name: (value) => (value !== "" ? null : "Invalid name"),
      description: (value) => (value !== "" ? null : "Invalid name"),
      image: (value) => (value !== null ? null : "pick an image"),
    },
  });

  const handleSubmit = (value: Recipe) => {
    const readyForm = new FormData();
    readyForm.append("image", value.image[0]);
    readyForm.append("ingredient", value.ingredient as string);
    readyForm.append("description", value.description);
    readyForm.append("cookingTime", value.cookingTime.toString());
    readyForm.append("name", value.name);
    updateRecipe.mutate(readyForm);
  };

  useEffect(() => {
    if (data) {
      form.setValues(data);
      form.resetDirty(data);
    }
  }, [data]);

  if (isLoading) return <p>Loading</p>;
  return (
    <Container
      py={120}
      maw="100%"
      className="relative flex items-center justify-center bg-gray-50"
    >
      <Paper className="w-full py-10 lg:w-1/3" shadow="xl" p={20}>
        <Title align="center" order={1} size={25} mb={25}>
          Изменить
        </Title>
        <form className="space-y-3" onSubmit={form.onSubmit(handleSubmit)}>
          <div className="space-y-3">
            {data && typeof form.values.image === "string" && (
              <div className="relative w-full h-72">
                <Image
                  src={getCroppedImageUrl(data?.image as string)}
                  alt="image"
                  className="object-cover rounded-lg"
                  fill
                />
              </div>
            )}
            <UploadImage file={form} />
          </div>

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

          <Textarea
            label="Description"
            {...form.getInputProps("description")}
          />

          <div className="flex justify-end gap-x-3">
            <Button type="submit">Обновить</Button>
            <Button type="button" onClick={() => form.reset()}>
              Сбрось
            </Button>
          </div>
        </form>
      </Paper>
      <LoadingOverlay visible={updateRecipe.isLoading} overlayBlur={2} />
    </Container>
  );
};

export default RecipeEditPage;
