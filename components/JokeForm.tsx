'use client';

import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';
import { createJoke } from '@/lib/actions/createJoke';
import type { JokeSchemaErrorType } from '@/validations/jokeSchema';
import AddButton from './AddButton';

export default function JokeForm() {
  const [state, formAction] = useFormState(createJoke, {
    errors: {} as JokeSchemaErrorType,
    message: '',
    success: false,
  });
  const ref = React.useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      ref.current?.reset();
      toast.success('Joke added');
    } else if (state.message === 'Database error') {
      toast.error('Failed to create joke...');
    }
  }, [state.message, state.success]);

  return (
    <form ref={ref} action={formAction}>
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
      <noscript>{state.message === 'Database error' && <p className="text-red">Failed to create joke...</p>}</noscript>
    </form>
  );
}
