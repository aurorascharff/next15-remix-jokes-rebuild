'use client';

import React from 'react';
import { createJoke } from '@/lib/actions/createJoke';
import AddButton from './AddButton';

export default function JokeForm() {
  return (
    <form action={createJoke}>
      <label>
        Name: <input type="text" name="name" />
      </label>
      <label>
        Content:
        <textarea name="content" />
      </label>
      <AddButton />
    </form>
  );
}
