'use client';

import React, { useActionState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { createJoke } from '@/lib/actions/createJoke';
import type { JokeSchemaErrorType } from '@/validations/jokeSchema';
import SubmitButton from './ui/SubmitButton';

export default function JokeForm() {
  const [state, formAction] = useActionState(createJoke, {
    errors: {} as JokeSchemaErrorType,
    success: false,
  });

  useEffect(() => {
    if (state.success) {
      toast.success('Joke added');
    }
  }, [state.success]);

  return (
    <form action={formAction}>
      <label>
        Name: <input defaultValue={state.data?.name} type="text" name="name" />
        <span className="text-red">{state.errors?.fieldErrors?.name}</span>
      </label>
      <label>
        Content:
        <textarea defaultValue={state.data?.content} name="content" />
        <span className="text-red">{state.errors?.fieldErrors?.content}</span>
      </label>
      <SubmitButton>Add</SubmitButton>
    </form>
  );
}
