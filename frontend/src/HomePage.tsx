/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Page } from './Page';
import { FieldLabel, PageSubTitle, PageTitle, PrimaryButton } from './Styles';
import { Recipe } from './Recipe';
import { getRecipe, getRecipeNow } from './RecipeDataPostParse';

export const HomePage = () => {
  const handleAddRecipeClick = () => {
    // navigate('add');
  };

  return (
    <Page>
      <PageTitle>Welcome to cooking with POTS!</PageTitle>
      <PageSubTitle>
        Crock Pots are the best way to cook without standing for long periods of
        time by a stove. Browse our recipes to help you feed your family or add
        your own to help others!{' '}
      </PageSubTitle>
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
      <Recipe data={getRecipeNow(1)} />
    </Page>
  );
};
