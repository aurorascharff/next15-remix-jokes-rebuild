'use client';

type Error = {
  message: string;
};

import SubmitButton from '@/src/components/SubmitButton';
import { createJoke } from '../_actions/createJoke';
import JokesList from '../_components/JokesList';
import useGetJokes from './_hooks/useGetJokes';
import type { Joke } from '@prisma/client';

export default function ReactQueryPage() {
  const { data, error, isLoading } = useGetJokes();

  return (
    <div className="flex flex-col gap-y-10 xl:w-1/3">
      <h4>React Query</h4>
      You can use react query on the client to fetch data from the server. By creating an initial state on the server,
      you can avoid a flash of loading content.
      <div>
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
        <div>
          {isLoading ? (
            'Loading...'
          ) : error ? (
            <span>Error: {(error as Error).message}</span>
          ) : (
            <JokesList jokes={data as Joke[]} />
          )}
        </div>
      </div>
    </div>
  );
}
