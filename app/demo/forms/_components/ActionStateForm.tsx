'use client';

import React, { useActionState, useEffect } from 'react';
import toast from 'react-hot-toast';
import AddButton from '@/components/AddButton';
import type { JokeSchemaErrorType } from '@/validations/jokeSchema';
import { createJokeActionState } from '../_actions/createJokeActionState';

export default function ActionStateForm() {
  const [state, action] = useActionState(createJokeActionState, {
    error: {} as JokeSchemaErrorType,
    success: false,
  });

  useEffect(() => {
    if (state.success) {
      toast.success('Joke added!');
    }
  }, [state.success, state.timestamp]);

  return (
    <form autoComplete="off" action={action}>
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
