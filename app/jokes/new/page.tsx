import React from 'react';
import Button from '@/components/Button';
import { createJoke } from '@/actions/createJoke';

export default function NewJokePage() {
  return (
    <div>
      <p className="text-white">Add your own hilarious joke</p>
      <form action={createJoke} className="flex flex-col gap-4 w-full">
        <div>
          <label className="text-white">
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
          <label className="text-white">
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
