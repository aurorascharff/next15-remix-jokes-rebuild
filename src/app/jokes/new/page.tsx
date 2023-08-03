import React from 'react';
import { createJoke } from '@/src/actions/createJoke';
import Button from '@/src/components/Button';

export default function NewJokePage() {
  return (
    <div>
      <p>Add your own hilarious joke</p>
      <form action={createJoke}>
        <div>
          <label>
            Name:
            <input
              className="appearance-none flex items-center w-full h-10 m-0 rounded shadow-none text-base font-normal leading-normal border-purple-light border-2 bg-layer bg-opacity-10"
              name="name"
              type="text"
              required
              minLength={2}
            />
          </label>
        </div>
        <div>
          <label>
            Content:
            <textarea
              className="appearance-none flex items-center w-full h-10 m-0 rounded shadow-none text-base font-normal leading-normal border-purple-light border-2 bg-layer bg-opacity-10"
              name="content"
              required
              minLength={5}
            />
          </label>
        </div>
        <div>
          <Button type="submit">Add</Button>
        </div>
      </form>
    </div>
  );
}
