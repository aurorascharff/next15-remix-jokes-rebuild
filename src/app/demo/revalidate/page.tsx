import React from 'react';
import Button from '@/src/components/Button';
import JokesList from '@/src/components/JokesList';
import { createJoke } from '../_actions/createJoke';
import Counter from '../_components/Counter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo - Revalidate',
};

export default function RevalidatePage() {
  return (
    <div className="flex flex-col gap-y-10 xl:w-1/3">
      <h4>Revalidate</h4>
      Updating data on the server does not destroy the client state. The RSC payload is used to seamlessly merge the
      refreshed data with the client state.
      <JokesList />
      <Counter />
      <form action={createJoke}>
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
