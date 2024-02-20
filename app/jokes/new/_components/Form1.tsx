import React from 'react';
import Button from '@/components/Button';
import { createJoke } from '@/lib/actions/createJoke1';

export default function Form() {
  return (
    <form action={createJoke}>
      <label>
        Name:
        <input name="name" type="text" />
      </label>
      <label>
        Content:
        <textarea name="content" />
      </label>
      <Button type="submit">Add joke</Button>
    </form>
  );
}
