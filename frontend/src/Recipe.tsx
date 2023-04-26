/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { RecipeBox, gray2, gray3 } from './Styles';
import React from 'react';
import { Link } from 'react-router-dom';
import { RecipeData } from './RecipeDataPostParse';
import Fraction from 'fraction.js';

interface Props {
  data: RecipeData;
  showContent?: boolean;
}

export const Recipe = ({ data, showContent = true }: Props) => (
  <RecipeBox>
    <div
      css={css`
        padding: 10px 0px;
      `}
    >
      <div
        css={css`
          padding: 10px 0px;
          font-size: 19px;
        `}
      >
        {/* <Link
        css={css`
          text-decoration: none;
          color: ${gray2};
        `}
        to={`/questions/${data.questionId}`}
      > */}
        {data.title}
        {/* </Link> */}
      </div>
      {showContent && (
        <div
          css={css`
            padding-bottom: 10px;
            font-size: 15px;
            color: ${gray2};
          `}
        >
          {data.ingredients.slice(0, 5).map((ingredient) => (
            <div key={ingredient.ingredientId}>
              <React.Fragment>
                {new Fraction(ingredient.amount).toFraction().toString()}{' '}
                {ingredient.unitOfMeasure} {ingredient.name}
              </React.Fragment>
            </div>
          ))}
          ...
        </div>
      )}
      <div
        css={css`
          font-size: 12px;
          font-style: italic;
          color: ${gray3};
        `}
      >{`Added by ${
        data.userName
      } on ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()} `}</div>
    </div>
  </RecipeBox>
);
