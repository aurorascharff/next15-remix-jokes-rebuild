import React from 'react';

import Button from '@/src/components/Button';
import { createJokeServerValidation } from '../../_actions/createJokeServerValidation';

export default function Form() {
  return (
    <div className="flex flex-col gap-5">
      <h4>Realistic form</h4>
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
    </div>
  );
}
