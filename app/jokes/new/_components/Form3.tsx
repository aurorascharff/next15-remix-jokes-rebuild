'use client';

import React, { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';
import SubmitButton from '@/components/SubmitButton';
import { createJoke } from '@/lib/actions/createJoke3';
import type { JokeSchemaErrorType } from '@/validations/jokeSchema';

export default function Form() {
  const [state, formAction] = useFormState(createJoke, {
    error: {} as JokeSchemaErrorType,
    success: false,
  });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      toast.success('Joke created');
    }
  }, [state.success]);

  return (
    <form ref={formRef} action={formAction}>
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
