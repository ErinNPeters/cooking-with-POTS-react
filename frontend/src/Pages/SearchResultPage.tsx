/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSearchParams } from 'react-router-dom';
import { RecipeList } from '../RecipeList';
import { searchRecipes, RecipeData } from '../RecipeDataPostParse';
import React from 'react';
import { Page } from '../Page';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppState,
  searchingRecipesAction,
  searchedRecipesAction,
} from '../Store';

export const SearchResultPage = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state: AppState) => state.recipes.searched);

  const [searchParams] = useSearchParams();

  const search = searchParams.get('criteria') || '';

  React.useEffect(() => {
    const doSearch = async (criteria: string) => {
      dispatch(searchingRecipesAction());
      const foundResults = await searchRecipes(criteria);
      dispatch(searchedRecipesAction(foundResults));
    };
    doSearch(search);
  }, [search]);

  return (
    <Page title="Search Results">
      {search && (
        <p
          css={css`
            font-size: 16px;
            font-style: italic;
            margin-top: 0px;
          `}
        >
          for "{search}"
        </p>
      )}
      <RecipeList data={recipes}></RecipeList>
    </Page>
  );
};
