/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PageTitle, gray3, gray6 } from '../Styles';

import React from 'react';
import { Page } from '../Page';
import { useParams } from 'react-router-dom';
import {
  Fieldset,
  FieldContainer,
  FieldLabel,
  FieldInput,
  FieldTextArea,
  FormButtonContainer,
  PrimaryButton,
  FieldError,
  SubmissionSuccess,
} from '../Styles';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, gettingRecipeAction, gotRecipeAction } from '../Store';
import { getRecipe } from '../RecipeDataPostParse';
import Fraction from 'fraction.js';

export const RecipePage = () => {
  const dispatch = useDispatch();
  const recipe = useSelector((state: AppState) => state.recipes.viewing);

  const { recipeId } = useParams();

  React.useEffect(() => {
    const doGetRecipe = async (recipeId: number) => {
      dispatch(gettingRecipeAction());
      const foundRecipe = await getRecipe(recipeId);
      dispatch(gotRecipeAction(foundRecipe));
    };
    if (recipeId) {
      doGetRecipe(Number(recipeId));
    }
  }, [recipeId]);

  return (
    <Page>
      <div
        css={css`
          background-color: white;
          padding: 15px 20px 20px 20px;
          border-radius: 4px;
          border: 1px solid ${gray6};
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
        `}
      >
        <div
          css={css`
            font-size: 19px;
            font-weight: bold;
            margin: 10px 0px 5px;
          `}
        ></div>
        {recipe !== null && (
          <React.Fragment>
            <p
              css={css`
                margin-top: 0px;
                background-color: white;
              `}
            >
              <PageTitle>{recipe.title}</PageTitle>
              <ul>
                {recipe.ingredients.map((ingredient) => (
                  <div key={ingredient.ingredientId}>{ingredient.content}</div>
                ))}
              </ul>
              <ol>
                {recipe.steps.map((step) => (
                  <div key={step.stepId}>
                    <li>{step.content} </li>
                    <br />
                  </div>
                ))}
              </ol>
            </p>
            <div
              css={css`
                font-size: 12px;
                font-style: italic;
                color: ${gray3};
              `}
            >
              {`Added by ${recipe.userName}`}
            </div>
          </React.Fragment>
        )}
      </div>
    </Page>
  );
};
