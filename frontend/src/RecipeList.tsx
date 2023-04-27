/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { RecipeData } from './RecipeDataPostParse';
import { Recipe } from './Recipe';
import { accent2, gray5 } from './Styles';

interface Props {
  data: RecipeData[];
  renderItem?: (item: RecipeData) => JSX.Element;
}

export const RecipeList = ({ data, renderItem }: Props) => (
  <ul
    css={css`
      list-style: none;
    `}
  >
    {data.map((recipe) => (
      <li
        key={recipe.recipeId}
        css={css`
          border-top: 1px solid ${gray5};
          :first-of-type {
            border-top: none;
          }
        `}
      >
        {renderItem ? renderItem(recipe) : <Recipe data={recipe} />}
      </li>
    ))}
  </ul>
);
