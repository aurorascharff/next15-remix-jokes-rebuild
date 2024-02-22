'use client';

import React from 'react';
import { useFormState } from 'react-dom';
import SubmitButton from '@/components/SubmitButton';
import { createJoke } from '@/lib/actions/createJoke3';
import type { JokeSchemaErrorType } from '@/validations/jokeSchema';

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
        <span className="font-sm text-red">{state.error?.fieldErrors?.name}</span>
      </label>
      <label>
        Content:
        <textarea name="content" />
        <span className="font-sm text-red">{state.error?.fieldErrors?.content}</span>
      </label>
      <SubmitButton />
    </form>
  );
}
