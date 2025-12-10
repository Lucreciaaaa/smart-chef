// components
import { Box } from "@mui/material";
import RecipeCard from "./RecipeCard";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

// hooks
import { useRecipes } from "../../hooks/useRecipes";
import { MAX_RECIPES } from "../../utils/constants";

export default function RecipesContainer() {
  const { loading } = useRecipes();
  const foundRecipes = useSelector(
    (state: RootState) => state.recipes.filtered,
  );

  // TODO : replace by MUI components
  if (loading) return <p>Loading…</p>;
  if (!foundRecipes.length) return <p>No recipes found.</p>;

  return (
    <Box
      sx={{
        display: "grid",
        gap: 3,
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      }}
    >
      {foundRecipes.slice(0, MAX_RECIPES).map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </Box>
  );
}
