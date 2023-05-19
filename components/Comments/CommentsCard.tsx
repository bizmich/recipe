import {
  createStyles,
  Text,
  Avatar,
  Group,
  TypographyStylesProvider,
  Paper,
  rem,
  Button,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  comment: {
    padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
  },

  body: {
    paddingLeft: rem(54),
    paddingTop: theme.spacing.sm,
    fontSize: theme.fontSizes.sm,
    display: "flex",
    justifyContent: "space-between",
    gap: 5,
  },

  content: {
    "& > p:last-child": {
      marginBottom: 0,
    },
  },
}));

interface CommentHtmlProps {
  postedAt: string;
  body: string;
  author: {
    name: string;
  };
  onDelete: (id: string) => void;
  id: string;
}

export function CommentCard({
  postedAt,
  body,
  author,
  onDelete,
  id,
}: CommentHtmlProps) {
  const { classes } = useStyles();
  return (
    <Paper className={classes.comment}>
      <Group>
        <Avatar alt={author.name} radius="xl" className="uppercase">
          {author.name[0]}
        </Avatar>
        <div>
          <Text fz="sm">{author.name}</Text>
          <Text fz="xs" c="dimmed">
            {postedAt}
          </Text>
        </div>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div className="" dangerouslySetInnerHTML={{ __html: body }} />
        <Button
          onClick={() => onDelete(id)}
          variant="white"
          className="self-end"
        >
          Удалить
        </Button>
      </TypographyStylesProvider>
    </Paper>
  );
}
