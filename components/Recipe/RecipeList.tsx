import useRecipeList from "../react-query/hooks/useRecipeList";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const { data, isLoading, error } = useRecipeList();

  if (isLoading) return <p>Loading</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {data?.list?.map((rec) => {
        return (
          <RecipeCard
            key={rec.id}
            name={rec.name}
            image={rec.image}
            id={rec.id}
            ingredient={rec.ingredient}
          />
        );
      })}
    </div>
  );
};

export default RecipeList;
