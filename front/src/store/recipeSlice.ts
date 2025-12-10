import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../types/recipe";

type RecipeState = {
  filtered: Recipe[];
};

const initialState: RecipeState = {
  filtered: [],
};

export const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setFilteredRecipes: (state, action: PayloadAction<Recipe[]>) => {
      state.filtered = action.payload;
    },
  },
});

export const { setFilteredRecipes } = recipeSlice.actions;
export default recipeSlice.reducer;
