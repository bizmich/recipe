import { Button, Group } from "@mantine/core";
import type { SpotlightAction } from "@mantine/spotlight";
import { SpotlightProvider, spotlight } from "@mantine/spotlight";
import { IconFileText, IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useRecipeList from "../../react-query/hooks/useRecipeList";
import SearchInput from "./SearchInput";

function SpotlightControl() {
  return (
    <Group position="center">
      <SearchInput onSearch={() => spotlight.open()} />
    </Group>
  );
}

const SearchBar = () => {
  const { push } = useRouter();
  const { data: recipes } = useRecipeList();

  const [data, setData] = useState<SpotlightAction[]>([]);

  useEffect(() => {
    if (recipes) {
      const filtered = recipes.list.map((el) => {
        return {
          title: el.name,
          description: el.description,
          onTrigger: () => push(`/recipe-preview/${el.id}`),
          icon: <IconFileText size="1.2rem" />,
        };
      });
      setData(filtered);
    }
  }, [recipes, push]);

  return (
    <SpotlightProvider
      actions={data}
      searchIcon={<IconSearch size="1.2rem" />}
      searchPlaceholder="Поиск..."
      shortcut="mod + shift + 1"
      nothingFoundMessage="Ничего не найдено..."
      className="line-clamp-1"
    >
      <SpotlightControl />
    </SpotlightProvider>
  );
};

export default SearchBar;
