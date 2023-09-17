import React from 'react';
import { getJokes } from '@/src/actions/getJokes';
import JokesList from '@/src/components/JokesList';
import ClientForm from '../_components/ClientForm';

export default async function ClientPage() {
  const jokes = await getJokes();

  return (
    <div className="flex flex-col gap-5 xl:w-1/3">
      <h4>Client-side validation</h4>
      Validation is happening on the client before calling the server, using Zod.
      <ClientForm />
      <JokesList jokes={jokes} />
    </div>
  );
}
