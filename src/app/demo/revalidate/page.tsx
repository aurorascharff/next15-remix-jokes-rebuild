import Link from 'next/link';
import React from 'react';
import { getJokes } from '@/src/actions/getJokes';
import SubmitButton from '@/src/components/SubmitButton';
import { createJoke } from '../_actions/createJoke';
import Counter from '../_components/Counter';

export default async function RevalidatePage() {
  const jokes = await getJokes();

  return (
    <div className="flex flex-col gap-10 xl:w-1/3">
      <div className="flex flex-col gap-y-10 ">
        <h4>Revalidate</h4>
        Updating data on the server does not destroy the client state. The RSC payload is used to seamlessly merge the
        refreshed data with the client state.
      </div>
      <div className="flex flex-col gap-10 md:flex-row">
        <ul>
          {jokes
            .sort((a, b) => {
              return a.name > b.name ? 1 : -1;
            })
            .slice(0, 4)
            .map(({ id, name }) => {
              return (
                <li key={id} className="flex justify-between gap-10 py-2">
                  <Link prefetch href={`/jokes/${id}`}>
                    {name}
                  </Link>
                  <Counter />
                </li>
              );
            })}
        </ul>
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
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}
