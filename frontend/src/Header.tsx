/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { gray1, FieldSearch, HeaderBox } from './Styles';
import React from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

type FormData = {
  search: string | null;
};

export const Header = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormData>();
  const [searchParams] = useSearchParams();
  const criteria = searchParams.get('criteria') || '';

  const submitForm = ({ search }: FormData) => {
    navigate(`search?criteria=${search}`);
    console.log(search);
  };

  return (
    <HeaderBox>
      <Link
        to="/"
        css={css`
          font-size: 24px;
          font-weight: bold;
          color: ${gray1};
          text-decoration: none;
        `}
      >
        Cooking with POTS
      </Link>
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSearch
          {...register('search')}
          name="search"
          type="text"
          placeholder="Search..."
          // defaultValue={criteria}
        />
      </form>{' '}
    </HeaderBox>
  );
};
