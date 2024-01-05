'use client';

import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';
import SubmitButton from '@/src/components/SubmitButton';
import { createJokeStateForm } from '../_actions/createJokeStateForm';

export default function StateForm() {
  const [state, formAction] = useFormState(createJokeStateForm, {
    error: undefined,
    success: false,
  });

  useEffect(() => {
    if (state?.success) {
      toast.success('Joke added!');
    }
  }, [state.success]);

  return (
    <form action={formAction}>
      <div>
        <label>
          Name:
          <input name="name" type="text" />
        </label>
      </div>
      <div>
        <label>
          Content:
          <textarea name="content" />
        </label>
      </div>
      <div className="flex justify-end">
        <SubmitButton />
      </div>
      <span className="text-red">{state?.error}</span>
    </form>
  );
}
