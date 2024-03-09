'use client';

import React, { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';
import Button from '@/components/Button';
import { createJoke } from '@/lib/actions/createJoke4';
import { useJokesContext } from '@/providers/JokesContext';
import type { JokeSchemaErrorType } from '@/validations/jokeSchema';

export default function Form() {
  const [state, formAction] = useFormState(createJoke, {
    errors: {} as JokeSchemaErrorType,
    message: '',
    success: false,
  });
  const formRef = useRef<HTMLFormElement>(null);

  const { addOptimisticJoke } = useJokesContext();

  const action = (data: FormData) => {
    addOptimisticJoke({
      content: data.get('content')?.valueOf() as string,
      name: data.get('name')?.valueOf() as string,
      starred: false,
    });
    formAction(data);
  };

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    } else if (!state.success && state.message === 'SERVER ERROR') {
      toast.error('Failed to create joke...');
    }
  }, [state]);

  return (
    <form ref={formRef} action={action}>
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
      <Button type="submit">Add joke</Button>
    </form>
  );
}
