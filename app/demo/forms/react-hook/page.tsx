import React from 'react';
import { getJokes } from '@/lib/services/getJokes';
import ReactHookForm from './_components/ReactHookForm';

export default async function ReactHookPage() {
  const jokes = await getJokes();

  return (
    <>
      <h4>React Hook Form</h4>
      Combining optimistic update, client and server side validation. Note that the content field&apos;s validation has
      been set to one more character in the server for demo purposes.
      <ReactHookForm jokes={jokes} />
    </>
  );
}
