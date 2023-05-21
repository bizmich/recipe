import { IconEye, IconMessageCircle } from "@tabler/icons-react";
import {
  Card,
  Text,
  Group,
  Center,
  createStyles,
  getStylesRef,
  rem,
} from "@mantine/core";
import getCroppedImageUrl from "@/components/Utils/getCroppedImageUrl";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    height: rem(280),
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],

    [`&:hover .${getStylesRef("image")}`]: {
      transform: "scale(1.03)",
    },
  },

  image: {
    ...theme.fn.cover(),
    ref: getStylesRef("image"),
    backgroundSize: "cover",
    transition: "transform 500ms ease",
  },

  overlay: {
    position: "absolute",
    top: "20%",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage:
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)",
  },

  content: {
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    zIndex: 1,
  },

  name: {
    color: theme.white,
    marginBottom: rem(5),
  },

  bodyText: {
    color: theme.colors.dark[2],
    marginLeft: rem(7),
  },

  ingredients: {
    color: theme.colors.dark[2],
  },
}));

export interface CarouselCardProps {
  image: string;
  name: string;
  ingredients: [];
  views: number;
  comments: [];
}

export function CarouselCard({
  image,
  name,
  ingredients,
  views,
  comments,
}: CarouselCardProps) {
  const { classes, theme } = useStyles();

  return (
    <Card p="lg" shadow="lg" className={classes.card} radius="md">
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${getCroppedImageUrl(image)})` }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.name} weight={500}>
            {name}
          </Text>

          <Group position="apart" spacing="xs">
            <Text
              size="sm"
              className={`line-clamp-1 w-1/2 ${classes.ingredients}`}
            >
              {ingredients.map((com) => {
                return <span key={com}>{com}</span>;
              })}
            </Text>

            <Group spacing="lg">
              <Center>
                <IconEye
                  size="1rem"
                  stroke={1.5}
                  color={theme.colors.dark[2]}
                />
                <Text size="sm" className={classes.bodyText}>
                  {views}
                </Text>
              </Center>
              <Center>
                <IconMessageCircle
                  size="1rem"
                  stroke={1.5}
                  color={theme.colors.dark[2]}
                />
                <Text size="sm" className={classes.bodyText}>
                  {/* {comments.length} */}
                </Text>
              </Center>
            </Group>
          </Group>
        </div>
      </div>
    </Card>
  );
}
