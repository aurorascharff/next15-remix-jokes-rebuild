import React from 'react';
import Button from '@/src/components/Button';
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
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
}
