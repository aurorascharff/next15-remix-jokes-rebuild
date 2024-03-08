'use client';

import React from 'react';
import { useFormState } from 'react-dom';
import SubmitButton from '@/components/SubmitButton';
import { createJoke } from '@/lib/actions/createJoke3';
import type { JokeSchemaErrorType } from '@/validations/jokeSchema';

export default function Form() {
  const [state, formAction] = useFormState(createJoke, {
    errors: {} as JokeSchemaErrorType,
    message: '',
    success: false,
  });

  return (
    <form action={formAction}>
      <label>
        Name:
        <input name="name" type="text" />
        <span className="font-sm text-red">{state.errors?.fieldErrors?.name}</span>
      </label>
      <label>
        Content:
        <textarea name="content" />
        <span className="font-sm text-red">{state.errors?.fieldErrors?.content}</span>
      </label>
      <SubmitButton />
      {state.message && <p>{state.message}</p>}
    </form>
  );
}
