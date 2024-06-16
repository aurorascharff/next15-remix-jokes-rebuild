import React from 'react';
import JokesList from '@/components/JokesList';
import ServerForm from './_components/ServerForm';

export default async function ServerPage() {
  return (
    <>
      <h4>Server-side validation</h4>
      Validation is happening inside the server action using Zod.
      <ServerForm />
      <JokesList />
    </>
  );
}
