import React from 'react';
import { Page } from '../Page';
import { useForm } from 'react-hook-form';
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
import { RecipeDataPreParse, postRecipe } from '../RecipeDataPreParse';

type FormData = {
  title: string;
  ingredients: string;
  steps: string;
};
export const AddRecipePage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    formState,
  } = useForm<FormData>({ mode: 'onBlur' });
  const [successfullySubmitted, setSuccessfullySubmitted] =
    React.useState(false);

  const submitForm = async (data: FormData) => {
    const result = await postRecipe({
      recipeId: 0, //0 indicates a new recipe. Will be auto-assigned by database on the backend.
      title: data.title,
      ingredients: data.ingredients,
      steps: data.steps,
      userName: 'Erin',
      created: new Date(),
      crockPot: true,
    });
    setSuccessfullySubmitted(result ? true : false);
  };

  return (
    <Page title="Add a recipe">
      <form onSubmit={handleSubmit(submitForm)}>
        <Fieldset disabled={formState.isSubmitting || successfullySubmitted}>
          <FieldContainer>
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <FieldInput
              type="text"
              {...register('title', { required: true, minLength: 10 })}
            />
            {errors.title && errors.title.type === 'required' && (
              <FieldError> You must enter the recipe title.</FieldError>
            )}
            {errors.title && errors.title.type === 'minLength' && (
              <FieldError>
                {' '}
                The title must be at least 10 characters.
              </FieldError>
            )}
          </FieldContainer>
          <FieldContainer>
            <FieldLabel htmlFor="ingredients">Ingredients</FieldLabel>
            <FieldTextArea
              {...register('ingredients', { required: true, minLength: 50 })}
            />
            {errors.ingredients && errors.ingredients.type === 'required' && (
              <FieldError> You must enter the recipe content.</FieldError>
            )}
            {errors.ingredients && errors.ingredients.type === 'minLength' && (
              <FieldError>
                {' '}
                The ingredients must be at least 50 characters.
              </FieldError>
            )}
          </FieldContainer>
          <FieldContainer>
            <FieldLabel htmlFor="steps">Steps</FieldLabel>
            <FieldTextArea
              {...register('steps', { required: true, minLength: 50 })}
            />
            {errors.steps && errors.steps.type === 'required' && (
              <FieldError> You must enter the recipe content.</FieldError>
            )}
            {errors.steps && errors.steps.type === 'minLength' && (
              <FieldError>
                {' '}
                The steps must be at least 50 characters.
              </FieldError>
            )}
          </FieldContainer>
          <FormButtonContainer>
            <PrimaryButton type="submit">Submit Your Recipe</PrimaryButton>
          </FormButtonContainer>
          {successfullySubmitted && (
            <SubmissionSuccess>
              {' '}
              Your recipe was successfully submitted.{' '}
            </SubmissionSuccess>
          )}
        </Fieldset>
      </form>
    </Page>
  );
};
