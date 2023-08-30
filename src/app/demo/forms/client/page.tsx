import React from 'react';
import { getJokes } from '@/src/actions/getJokes';
import JokesList from '@/src/components/JokesList';
import ClientForm from '../_components/ClientForm';

export default async function ClientPage() {
  const jokes = await getJokes();

  return (
    <div className="flex w-1/4 flex-col gap-5">
      <h4>Client-side validation</h4>
      <ClientForm />
      <JokesList jokes={jokes} />
    </div>
  );
}
