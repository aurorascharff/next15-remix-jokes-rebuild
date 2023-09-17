import React from 'react';
import { getJokes } from '@/src/actions/getJokes';
import JokesList from '@/src/components/JokesList';
import ServerForm from '../_components/ServerForm';

export default async function ServerPage() {
  const jokes = await getJokes();

  return (
    <div className="flex flex-col gap-5 xl:w-1/3">
      <h4>Server-side validation</h4>
      Validation is happening inside the server action using Zod.
      <ServerForm />
      <JokesList jokes={jokes} />
    </div>
  );
}
