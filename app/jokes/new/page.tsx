import React from 'react';
import AddButton from '@/components/AddButton';
import { createJoke } from '@/lib/actions/createJoke';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New joke',
};

export default function NewJokePage() {
  return (
    <div className="flex flex-col gap-5">
      <p>Add your own hilarious joke</p>
      <form autoComplete="off" action={createJoke}>
        <label>
          Name:
          <input name="name" type="text" required minLength={2} />
        </label>
        <label>
          Content:
          <textarea name="content" required minLength={5} />
        </label>
        <AddButton />
      </form>
    </div>
  );
}
