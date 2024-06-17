import Link from 'next/link';
import React from 'react';
import AddButton from '@/components/AddButton';
import { getJokes } from '@/lib/services/getJokes';
import { createJoke } from '../_actions/createJoke';
import Counter from '../_components/Counter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo - Revalidate',
};

export default async function RevalidatePage() {
  const jokes = await getJokes();

  return (
    <>
      <div className="flex flex-col gap-y-10">
        <h4>Revalidation</h4>
        Updating data on the server does not destroy the client state. The RSC payload is used to seamlessly merge the
        refreshed data with the client state.
      </div>
      <div className="flex flex-col gap-10 md:flex-row">
        <ul>
          {jokes
            .sort((a, b) => {
              return b.createdAt.getTime() - a.createdAt.getTime();
            })
            .slice(0, 4)
            .map(({ id, name }) => {
              return (
                <li key={id} className="flex justify-between gap-10 py-2">
                  <Link href={`/jokes/${id}`}>{name}</Link>
                  <Counter />
                </li>
              );
            })}
        </ul>
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
      </div>
    </>
  );
}
