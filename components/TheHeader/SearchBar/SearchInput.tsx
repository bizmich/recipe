import {
  TextInput,
  TextInputProps,
  ActionIcon,
  useMantineTheme,
} from "@mantine/core";
import { IconSearch, IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

const SearchInput = ({ onSearch }: { onSearch: () => void }) => {
  const theme = useMantineTheme();

  return (
    <TextInput
      onClick={onSearch}
      icon={<IconSearch size="1rem" stroke={1.5} />}
      radius="xl"
      readOnly
      className="cursor-pointer"
      rightSection={
        <ActionIcon
          size={32}
          radius="xl"
          color={theme.primaryColor}
          variant="filled"
        >
          {theme.dir === "ltr" ? (
            <IconArrowRight size="1.1rem" stroke={1.5} />
          ) : (
            <IconArrowLeft size="1.1rem" stroke={1.5} />
          )}
        </ActionIcon>
      }
      placeholder="Поиск"
      rightSectionWidth={36}
    />
  );
};

export default SearchInput;
