'use client';

import React, { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';
import SubmitButton from '@/components/SubmitButton';
import { createJoke } from '@/lib/actions/createJoke3';
import type { JokeSchemaErrorType } from '@/validations/jokeSchema';

export default function Form() {
  const [state, formAction] = useFormState(createJoke, {
    errors: {} as JokeSchemaErrorType,
    message: '',
    success: false,
  });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      toast.success('Joke created!');
    }
    if (state.message === 'SERVER ERROR') {
      toast.error('Failed to create joke...');
    }
  }, [state.message, state.success]);

  return (
    <form ref={formRef} action={formAction}>
      <label>
        Name:
        <input name="name" type="text" />
        <span className="text-red">{state.errors?.fieldErrors?.name}</span>
      </label>
      <label>
        Content:
        <textarea name="content" />
        <span className="text-red">{state.errors?.fieldErrors?.content}</span>
      </label>
      <SubmitButton />
      <noscript>{state.message === 'SERVER ERROR' && <p className="text-red">Failed to create joke...</p>}</noscript>
    </form>
  );
}
