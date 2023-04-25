/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Page } from './Page';
import { PageSubTitle, PageTitle, PrimaryButton } from './Styles';

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
    </Page>
  );
};
