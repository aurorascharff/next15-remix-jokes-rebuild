'use client';

import React, { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';
import SubmitButton from '@/components/SubmitButton';
import type { JokeSchemaErrorType } from '@/validations/jokeSchema';
import { createJokeStateForm } from '../_actions/createJokeStateForm';

export default function StateForm() {
  const [state, formAction] = useFormState(createJokeStateForm, {
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
    <form autoComplete="off" action={formAction} ref={formRef}>
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
        <SubmitButton />
      </div>
    </form>
  );
}
