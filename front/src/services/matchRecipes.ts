import { Recipe } from "../types/recipe";
import {
  computeNormalizedScore,
  getRelevantInputCount,
} from "../utils/matching";

export function matchRecipes(
  recipes: Recipe[],
  userIngredientsInputs: string[] = [],
  coverageRatio = 0.8,
) {
  const relevantInputCount = getRelevantInputCount(
    userIngredientsInputs.length,
    coverageRatio,
  );
  const scored = recipes.map((recipe) => {
    // normalize recipe ingredients
    const recipeIngs = (recipe.ingredients || [])
      .filter((i) => i?.name)
      .map((i) => i.name.toLowerCase());

    // match
    const usedIngredients = userIngredientsInputs.filter((userIng) => {
      const u = userIng.toLowerCase().trim();

      return recipeIngs.some((r) => {
        return r.includes(u) || u.includes(r);
      });
    });

    const matchedCount = usedIngredients.length;

    return {
      usedIngredients,
      matchIngredientsCount: matchedCount,

      // Internal
      relevantInputCount,
      normalizedMatchScore: computeNormalizedScore(
        matchedCount,
        relevantInputCount,
      ),

      ...recipe,
    };
  });

  const finalRecipes = scored
    .filter((r) => r.matchIngredientsCount >= 2) // at least 2 ingredients matching
    .sort((a, b) => b.matchIngredientsCount - a.matchIngredientsCount);

  return finalRecipes;
}
