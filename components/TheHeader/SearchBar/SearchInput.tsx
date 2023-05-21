import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const SearchInput = ({ onSearch }: { onSearch: () => void }) => {
  return (
    <TextInput
      onClick={onSearch}
      icon={<IconSearch size="1rem" stroke={1.5} />}
      radius="xl"
      readOnly
      w={120}
      className="cursor-pointer"
      placeholder="Поиск"
      rightSectionWidth={36}
    />
  );
};

export default SearchInput;
