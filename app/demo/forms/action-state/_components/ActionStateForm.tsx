'use client';

import React, { useActionState, useEffect } from 'react';
import toast from 'react-hot-toast';
import AddButton from '@/components/AddButton';
import type { JokeSchemaErrorType } from '@/validations/jokeSchema';
import { createJoke } from '../_actions/createJoke';

export default function ActionStateForm() {
  const [state, createJokeAction] = useActionState(createJoke, {
    error: {} as JokeSchemaErrorType,
    success: false,
  });

  useEffect(() => {
    if (state.success) {
      toast.success('Joke added!');
    }
  }, [state.success, state.timestamp]);

  return (
    <form autoComplete="off" action={createJokeAction}>
      <label>
        Name:
        <input defaultValue={state.data?.name} name="name" type="text" />
        <span className="text-red">{state.error?.fieldErrors?.name}</span>
      </label>
      <label>
        Content:
        <textarea defaultValue={state.data?.content} name="content" />
        <span className="text-red">{state.error?.fieldErrors?.content}</span>
      </label>
      <div className="flex justify-end">
        <AddButton />
      </div>
    </form>
  );
}
