'use client';

import React from 'react';
import { useFormState } from 'react-dom';
import SubmitButton from '@/components/SubmitButton';
import { createJoke } from '@/lib/actions/createJoke3';
import { JokeSchemaErrorType } from '@/validations/jokeSchema';

export default function Form() {
  const [state, formAction] = useFormState(createJoke, {
    error: {} as JokeSchemaErrorType,
    success: false,
  });

  return (
    <form action={formAction}>
      <label>
        Name:
        <input name="name" type="text" />
        {state.error?.fieldErrors?.name}
      </label>
      <label>
        Content:
        <textarea name="content" />
        {state.error?.fieldErrors?.content}
      </label>
      <SubmitButton />
    </form>
  );
}
