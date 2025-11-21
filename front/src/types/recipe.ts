export type IngredientQuantity = {
  name: string;
  quantity: string;
};

export type Recipe = {
  id: string;
  title: string;
  overview?: string;
  image: string;
  ingredients: IngredientQuantity[];
  usedIngredients?: string[]; // those that matches the user input
  cookingTime: number;
  servings: number;
  steps: string[];
};
