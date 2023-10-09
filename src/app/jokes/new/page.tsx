import React from 'react';
import { createJoke } from '@/src/actions/createJoke';
import SubmitButton from '@/src/components/SubmitButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New joke',
};

export default function NewJokePage() {
  return (
    <div className="flex flex-col gap-5">
      <p>Add your own hilarious joke</p>
      <form action={createJoke}>
        <div>
          <label>
            Name:
            <input name="name" type="text" required minLength={2} />
          </label>
        </div>
        <div>
          <label>
            Content:
            <textarea name="content" required minLength={5} />
          </label>
        </div>
        <div className="flex justify-end">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
