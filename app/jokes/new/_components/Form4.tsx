'use client';

import React, { useEffect, useRef, useTransition } from 'react';
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
  const [isPending, startTransition] = useTransition();

  const { addOptimisticJoke } = useJokesContext();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(async () => {
      addOptimisticJoke(formData);
      await formAction(formData);
    });
  };

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    } else if (state.message === 'SERVER ERROR') {
      toast.error('Failed to create joke...');
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} onSubmit={onSubmit}>
      <label>
        Name:
        <input className={isPending ? 'text-transparent' : ''} name="name" type="text" />
        <span className="text-red">{state.errors?.fieldErrors?.name}</span>
      </label>
      <label>
        Content:
        <textarea className={isPending ? 'text-transparent' : ''} name="content" />
        <span className="text-red">{state.errors?.fieldErrors?.content}</span>
      </label>
      <Button type="submit">Add joke</Button>
      <noscript>{state.message === 'SERVER ERROR' && <p>Failed to create joke...</p>}</noscript>
    </form>
  );
}
