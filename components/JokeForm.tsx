'use client';

import React from 'react';
import { useFormState } from 'react-dom';
import { createJoke } from '@/lib/actions/createJoke';
import type { JokeSchemaErrorType } from '@/validations/jokeSchema';
import AddButton from './AddButton';

export default function JokeForm() {
  const [state, formAction] = useFormState(createJoke, {
    errors: {} as JokeSchemaErrorType,
    message: '',
    success: false,
  });

  return (
    <form action={formAction}>
      <label>
        Name: <input type="text" name="name" />
        <span className="text-red">{state.errors?.fieldErrors?.name}</span>
      </label>
      <label>
        Content:
        <textarea name="content" />
        <span className="text-red">{state.errors?.fieldErrors?.content}</span>
      </label>
      <AddButton />
    </form>
  );
}
