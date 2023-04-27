import { RecipeData } from './RecipeDataPostParse';
import { Store, createStore, combineReducers } from 'redux';

interface RecipesState {
  readonly loading: boolean;
  readonly viewing: RecipeData | null;
  readonly recipeOfTheDay: RecipeData | null;
  readonly searched: RecipeData[];
}

export interface AppState {
  readonly recipes: RecipesState;
}

const initialState: RecipesState = {
  loading: false,
  recipeOfTheDay: null,
  viewing: null,
  searched: [],
};

//6 actions that will be passed into the reducer
export const GETTINGRECIPEOFTHEDAY = 'GettingRecipeOfTheDay';
export const gettingRecipeOfTheDayAction = () =>
  ({
    type: GETTINGRECIPEOFTHEDAY,
  } as const);
export const GOTRECIPEOFTHEDAY = 'GotRecipeOfTheDay';
export const gotRecipeOfTheDayAction = (recipe: RecipeData | null) =>
  ({
    type: GOTRECIPEOFTHEDAY,
    recipe: recipe,
  } as const);

export const GETTINGRECIPE = 'GettingRecipe';
export const gettingRecipeAction = () =>
  ({
    type: GETTINGRECIPE,
  } as const);
export const GOTRECIPE = 'GotRecipe';
export const gotRecipeAction = (recipe: RecipeData | null) =>
  ({
    type: GOTRECIPE,
    recipe: recipe,
  } as const);

export const SEARCHINGRECIPES = 'SearchingRecipes';
export const searchingRecipesAction = () =>
  ({
    type: SEARCHINGRECIPES,
  } as const);

export const SEARCHEDRECIPES = 'SearchedRecipes';
export const searchedRecipesAction = (recipes: RecipeData[]) =>
  ({
    type: SEARCHEDRECIPES,
    recipes,
  } as const);

//Reducer - fucuntion that will make the necessary changes to the state
//Parameters in: current state and action
//Returns: new state

type RecipesActions =
  | ReturnType<typeof gettingRecipeOfTheDayAction>
  | ReturnType<typeof gotRecipeOfTheDayAction>
  | ReturnType<typeof gettingRecipeAction>
  | ReturnType<typeof gotRecipeAction>
  | ReturnType<typeof searchingRecipesAction>
  | ReturnType<typeof searchedRecipesAction>;

const recipesReducer = (state = initialState, action: RecipesActions) => {
  switch (action.type) {
    case GETTINGRECIPEOFTHEDAY: {
      return { ...state, loading: true };
    }
    case GOTRECIPEOFTHEDAY: {
      return {
        ...state,
        recipeOfTheDay: action.recipe,
        loading: false,
      };
    }
    case GETTINGRECIPE: {
      return {
        ...state,
        viewing: null,
        loading: true,
      };
    }
    case GOTRECIPE: {
      return {
        ...state,
        viewing: action.recipe,
        loading: false,
      };
    }
    case SEARCHINGRECIPES: {
      return {
        ...state,
        searched: [],
        loading: true,
      };
    }
    case SEARCHEDRECIPES: {
      return {
        ...state,
        searched: action.recipes,
        loading: false,
      };
    }
  }

  return state;
};

const rootReducer = combineReducers<AppState>({
  recipes: recipesReducer,
});

export function configureStore(): Store<AppState> {
  const store = createStore(rootReducer, undefined);
  return store;
}
