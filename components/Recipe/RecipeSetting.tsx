import { Select, Title } from "@mantine/core";
import { IconSortAscendingLetters } from "@tabler/icons-react";

interface RecipeSettingProps {}

const RecipeSetting = ({}) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <Title mb={40}>Блюда</Title>
      <div>
        <Select
          placeholder="Pick a hashtag"
          data={["React", "Angular", "Svelte", "Vue"]}
          icon={<IconSortAscendingLetters size="1rem" />}
        />
      </div>
    </div>
  );
};
export default RecipeSetting;
