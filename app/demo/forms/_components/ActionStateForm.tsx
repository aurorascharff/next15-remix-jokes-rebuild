'use client';

import React, { useActionState, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import Button from '@/components/ui/Button';
import type { JokeSchemaErrorType } from '@/validations/jokeSchema';
import { createJokeStateForm } from '../_actions/createJokeStateForm';

export default function ActionStateForm() {
  const [state, action, isPending] = useActionState(createJokeStateForm, {
    error: {} as JokeSchemaErrorType,
    success: false,
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      toast.success('Joke added!');
    }
  }, [state.success]);

  return (
    <form autoComplete="off" action={action} ref={formRef}>
      <label>
        Name:
        <input name="name" type="text" />
        <span className="text-red">{state.error?.fieldErrors?.name}</span>
      </label>
      <label>
        Content:
        <textarea name="content" />
        <span className="text-red">{state.error?.fieldErrors?.content}</span>
      </label>
      <div className="flex justify-end">
        <Button disabled={isPending} type="submit">
          {isPending ? 'Adding...' : 'Add'}
        </Button>
      </div>
    </form>
  );
}
