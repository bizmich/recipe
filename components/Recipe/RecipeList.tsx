import { useEffect, useState } from "react";
import useStore from "../react-query/state-management/store";
import RecipeCard from "./RecipeCard";
import { Recipe } from "@/types/interfaces";

const RecipeList = () => {
  const [recipe, setRecipe] = useState<Recipe[]>();
  const remoteRecipe = useStore((s) => s.recipe);
  useEffect(() => {
    setRecipe(remoteRecipe);
  }, [remoteRecipe]);

  return (
    <div className="grid grid-cols-3 gap-8">
      {recipe?.map((rec) => {
        return (
          <RecipeCard
            key={rec.id}
            name={rec.name}
            id={rec.id}
            ingredient={rec.ingredient}
          />
        );
      })}
    </div>
  );
};

export default RecipeList;
