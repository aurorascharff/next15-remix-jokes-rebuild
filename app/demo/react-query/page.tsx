'use client';

import SubmitButton from '@/components/SubmitButton';
import type { JokeSchemaType } from '@/validations/jokeSchema';
import { createJoke } from '../_actions/createJoke';
import JokesList from '../_components/JokesList';
import useGetJokes from './_hooks/useGetJokes';

type Error = {
  message: string;
};

export default function ReactQueryPage() {
  const { data, error, isLoading } = useGetJokes();

  return (
    <>
      <h4>React Query</h4>
      You can use react query on the client to fetch data from the server. By creating an initial state on the server,
      you can avoid a flash of loading content.
      <div>
        <form autoComplete="off" action={createJoke}>
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
            <JokesList jokes={data as JokeSchemaType[]} />
          )}
        </div>
      </div>
    </>
  );
}
