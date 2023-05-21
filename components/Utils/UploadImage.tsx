import { Recipe } from "@/types/interfaces";
import { Button, Image, Text } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { UseFormReturnType } from "@mantine/form";

const UploadImage = ({
  file,
}: {
  file: UseFormReturnType<Recipe, (values: Recipe) => Recipe>;
}) => {
  const previews =
    Array.isArray(file.values.image) &&
    file.values.image.map((file, index) => {
      const imageUrl = URL.createObjectURL(file);
      return (
        <Image
          key={index}
          src={imageUrl}
          imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
          alt="image"
          height={280}
        />
      );
    });

  return (
    <div>
      <div className="overflow-hidden rounded-xl">{previews}</div>
      <div className="mt-5">
        {file.values.image.length === 0 ? (
          <Dropzone
            accept={IMAGE_MIME_TYPE}
            onDrop={(files) => file.setFieldValue("image", files)}
          >
            <Text align="center">Выберите или тяните фото</Text>
          </Dropzone>
        ) : (
          <Button
            w="100%"
            onClick={() => {
              file.setFieldValue("image", []);
            }}
          >
            Удалить
          </Button>
        )}
      </div>
    </div>
  );
};

export default UploadImage;
