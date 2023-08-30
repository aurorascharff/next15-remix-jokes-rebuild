import React from 'react';
import { getJokes } from '@/src/actions/getJokes';
import JokesList from '@/src/components/JokesList';
import ServerForm from '../_components/ServerForm';

export default async function ServerPage() {
  const jokes = await getJokes();

  return (
    <div className="flex w-1/4 flex-col gap-5">
      <h4>Server-side validation</h4>
      <ServerForm />
      <JokesList jokes={jokes} />
    </div>
  );
}
