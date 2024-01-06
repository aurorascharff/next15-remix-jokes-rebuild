'use client';

import React, { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';
import SubmitButton from '@/src/components/SubmitButton';
import { createJokeStateForm } from '../_actions/createJokeStateForm';

export default function StateForm() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [state, formAction] = useFormState(createJokeStateForm, {
    error: undefined,
    success: false,
  });

  useEffect(() => {
    if (state?.success) {
      if (formRef.current) {
        formRef.current.reset();
      }
      toast.success('Joke added!');
    }
  }, [state.success]);

  return (
    <form action={formAction} ref={formRef}>
      <label>
        Name:
        <input name="name" type="text" />
      </label>
      <label>
        Content:
        <textarea name="content" />
      </label>
      <div className="flex justify-end">
        <SubmitButton />
      </div>
      <span className="text-red">{state?.error}</span>
    </form>
  );
}
