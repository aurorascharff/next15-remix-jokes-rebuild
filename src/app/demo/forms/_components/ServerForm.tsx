import React from 'react';
import SubmitButton from '@/src/components/SubmitButton';
import { createJokeServerValidation } from '../_actions/createJokeServerValidation';

export default function ServerForm() {
  return (
    <form action={createJokeServerValidation}>
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
    </form>
  );
}
