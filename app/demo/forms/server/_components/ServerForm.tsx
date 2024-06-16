import React from 'react';
import AddButton from '@/components/AddButton';
import { createJoke } from '../_actions/createJoke';

export default function ServerForm() {
  return (
    <form autoComplete="off" action={createJoke}>
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
