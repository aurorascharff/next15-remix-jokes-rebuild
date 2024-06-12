import React from 'react';
import AddButton from '@/components/AddButton';
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
      <AddButton />
    </form>
  );
}
