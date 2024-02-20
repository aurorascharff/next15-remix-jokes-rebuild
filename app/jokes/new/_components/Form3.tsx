'use client';

import React, { useEffect } from 'react';
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

  const formRef = React.useRef<HTMLFormElement>(null);

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
        {state.error?.fieldErrors?.name}
      </label>
      <label>
        Content:
        <textarea name="content" />
        {state.error?.fieldErrors?.content}
      </label>
      <SubmitButton />
    </form>
  );
}
