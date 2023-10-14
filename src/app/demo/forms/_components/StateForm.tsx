'use client';

import React from 'react';
// @ts-expect-error There is no type def for this yet
import { experimental_useFormState as useFormState } from 'react-dom';
import SubmitButton from '@/src/components/SubmitButton';
import { createJokeStateForm } from '../_actions/createJokeStateForm';

const initialState = {
  error: null,
};

export default function StateForm() {
  const [state, formAction] = useFormState(createJokeStateForm, initialState);

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
