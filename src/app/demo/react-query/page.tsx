'use client';

type Error = {
  message: string;
};

import Button from '@/src/components/Button';
import JokesList from '@/src/components/JokesList';
import { createJoke } from './_actions/createJoke';
import useGetJokes from './_hooks/useGetJokes';
import type { Joke } from '@prisma/client';

export default function ReactQueryPage() {
  const { data, isLoading, error } = useGetJokes();

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
            <Button type="submit">Add</Button>
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
