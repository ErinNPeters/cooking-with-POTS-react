export interface RecipeData {
  recipeId: number;
  title: string;
  ingredients: IngredientData[];
  userName: string;
  created: Date;
  steps: StepData[];
  crockPot: boolean;
  sauceName?: string;
}

export interface StepData {
  recipeId: number;
  stepOrder: number;
  content: string;
}

export interface IngredientData {
  recipeId: number;
  ingredientId: number;
  name: string;
  amount: number;
  unitOfMeasure: string;
  sauceIngredient?: boolean;
}

const recipes: RecipeData[] = [
  {
    recipeId: 1,
    title: 'Smothered Pork Chops',
    ingredients: [
      {
        recipeId: 1,
        ingredientId: 1,
        name: 'pork chops',
        amount: 3,
        unitOfMeasure: 'lb',
        sauceIngredient: false,
      },
      {
        recipeId: 1,
        ingredientId: 2,
        name: 'Creole seasoning',
        amount: 2,
        unitOfMeasure: 'tsp',
        sauceIngredient: true,
      },
      {
        recipeId: 1,
        ingredientId: 3,
        name: 'Condensed Golden Mushroom Soup',
        amount: 1,
        unitOfMeasure: 'can',
        sauceIngredient: true,
      },
      {
        recipeId: 1,
        ingredientId: 4,
        name: 'beer',
        amount: 1 / 2,
        unitOfMeasure: 'cup',
        sauceIngredient: true,
      },
      {
        recipeId: 1,
        ingredientId: 5,
        name: 'flour',
        amount: 1 / 4,
        unitOfMeasure: 'cup',
        sauceIngredient: true,
      },
      {
        recipeId: 1,
        ingredientId: 6,
        name: 'Dijon-style mustard',
        amount: 2,
        unitOfMeasure: 'tbsp',
        sauceIngredient: true,
      },
      {
        recipeId: 1,
        ingredientId: 7,
        name: 'packed brown sugar',
        amount: 1,
        unitOfMeasure: 'tbsp',
        sauceIngredient: true,
      },
      {
        recipeId: 1,
        ingredientId: 8,
        name: 'sliced mushrooms',
        amount: 3,
        unitOfMeasure: 'cups',
        sauceIngredient: true,
      },
      {
        recipeId: 1,
        ingredientId: 9,
        name: 'onion',
        amount: 1,
        unitOfMeasure: 'cup',
        sauceIngredient: true,
      },
    ],
    userName: 'Erin',
    created: new Date(),
    steps: [
      {
        recipeId: 1,
        stepOrder: 1,
        content:
          'Season pork, if desired, then sprinkle with Creole seasoning. Stir soup, beer, flour, mustard, and born sugar in 6 qt slow cooker. Add mushrooms, onion, and pork.',
      },
      {
        recipeId: 1,
        stepOrder: 2,
        content:
          'Cover and cook LOW 6 hours or until pork is done. Server over hot cooked rice.',
      },
    ],
    crockPot: true,
    sauceName: 'Smoothered',
  },
];

export const getCrockPotRecipes = async (): Promise<RecipeData[]> => {
  await wait(500);
  return recipes.filter((r) => r.crockPot === true);
};

const wait = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getRecipe = async (
  recipeId: number,
): Promise<RecipeData | null> => {
  await wait(500);
  const results = recipes.filter((r) => r.recipeId === recipeId);
  return results.length === 0 ? null : results[0];
};

export const searchRecipes = async (
  criteria: string,
): Promise<RecipeData[]> => {
  await wait(500);
  return recipes.filter(
    (r) =>
      r.title.toLowerCase().indexOf(criteria.toLowerCase()) >= 0 ||
      r.ingredients.filter(
        (i) => i.name.toLowerCase().indexOf(criteria.toLowerCase()) >= 0,
      ),
  );
};
