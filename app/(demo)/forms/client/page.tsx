import React from 'react';
import JokesList from '@/components/JokesList';
import ClientForm from './_components/ClientForm';

export default async function ClientPage() {
  return (
    <>
      <h4>Client-side validation</h4>
      Validation is happening on the client before calling the server, using Zod.
      <ClientForm />
      <JokesList />
    </>
  );
}
