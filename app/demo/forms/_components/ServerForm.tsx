import React from 'react';
import SubmitButton from '@/components/SubmitButton';
import { createJokeServerValidation } from '../_actions/createJokeServerValidation';

export default function ServerForm() {
  return (
    <form autoComplete="off" action={createJokeServerValidation}>
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
    </form>
  );
}
