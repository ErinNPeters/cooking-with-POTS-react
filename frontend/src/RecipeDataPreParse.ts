export interface RecipeDataPreParse {
  recipeId: number;
  title: string;
  ingredients: string;
  userName: string;
  created: Date;
  steps: string;
  crockPot: boolean;
}

const wait = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const recipeQueue: RecipeDataPreParse[] = new Array();

export const postRecipe = async (
  recipe: RecipeDataPreParse,
): Promise<RecipeDataPreParse | undefined> => {
  await wait(500);
  const recipeId = Math.max(...recipeQueue.map((r) => r.recipeId)) + 1;
  const newRecipe: RecipeDataPreParse = {
    ...recipe,
    recipeId: recipeId,
  };
  recipeQueue.push(newRecipe);
  return newRecipe;
};
