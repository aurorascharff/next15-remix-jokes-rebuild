import React from 'react';
import { getJokes } from '../../react-query/_services/getJokes';
import ReactHookForm from '../_components/ReactHookForm';

export default async function ReactHookPage() {
  const jokes = await getJokes();

  return (
    <div className="flex flex-col gap-5 xl:w-1/3">
      <h4>React Hook Form</h4>
      Combining optimistic update, client and server side validation. Note that the content field&apos;s validation has
      been set to one more character in the server for demo purposes.
      <ReactHookForm jokes={jokes} />
    </div>
  );
}
