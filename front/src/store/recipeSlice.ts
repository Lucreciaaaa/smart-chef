import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ScoredRecipe } from "../types/recipe";

type RecipeState = {
  filtered: ScoredRecipe[];
  hasSearched: boolean;
};

const initialState: RecipeState = {
  filtered: [],
  hasSearched: false,
};

export const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setFilteredRecipes: (state, action: PayloadAction<ScoredRecipe[]>) => {
      state.filtered = action.payload;
      state.hasSearched = true;
    },
    resetRecipes: (state) => {
      state.filtered = [];
      state.hasSearched = false;
    },
  },
});

export const { setFilteredRecipes, resetRecipes } = recipeSlice.actions;
export default recipeSlice.reducer;
