/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Page } from '../Page';
import { FieldLabel, PageSubTitle, PageTitle, PrimaryButton } from '../Styles';
import { Recipe } from '../Recipe';
import { getRecipe, getRecipeNow } from '../RecipeDataPostParse';
import { useSelector } from 'react-redux';
import {
  AppState,
  gettingRecipeOfTheDayAction,
  gotRecipeOfTheDayAction,
} from '../Store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();
  const handleAddRecipeClick = () => {
    navigate('add');
  };
  const dispatch = useDispatch();

  const recipeOfTheDay = useSelector(
    (state: AppState) => state.recipes.recipeOfTheDay,
  );
  const recipeLoading = useSelector((state: AppState) => state.recipes.loading);

  React.useEffect(() => {
    const doGetRecipe = async () => {
      dispatch(gettingRecipeOfTheDayAction());
      const rotd = await getRecipe(1);
      dispatch(gotRecipeOfTheDayAction(rotd));
    };
    doGetRecipe();
  }, []);

  return (
    <Page>
      <PageTitle>Welcome to cooking with POTS!</PageTitle>
      <br />
      <PageSubTitle>
        Slow cookers are the best way to cook without standing for long periods
        of time by a stove. Anyone with POTS (postural orthostatic tachycardia
        syndrome) knows this is the hardest part of cooking. Browse our recipes
        to help you feed your family or add your own to help others!{' '}
      </PageSubTitle>
      <br />
      <PrimaryButton onClick={handleAddRecipeClick}>Add a recipe</PrimaryButton>
      <br /> <br /> <br />
      <hr></hr>
      <br /> <br />
      <div
        css={css`
          white-space: pre-wrap;
        `}
      >
        <FieldLabel>Recipe of the day:</FieldLabel>
      </div>
      {recipeLoading && <div>Loading...</div>}
      {recipeOfTheDay !== null && (
        <React.Fragment>
          <Recipe data={recipeOfTheDay} />
        </React.Fragment>
      )}
    </Page>
  );
};
