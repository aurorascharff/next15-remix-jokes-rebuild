'use client';

import React from 'react';
import { useFormState } from 'react-dom';
import SubmitButton from '@/src/components/SubmitButton';
import { createJokeStateForm } from '../_actions/createJokeStateForm';

export default function StateForm() {
  const [state, formAction] = useFormState(createJokeStateForm, null);

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
