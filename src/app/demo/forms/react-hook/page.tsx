import React from 'react';
import { getJokes } from '@/src/actions/getJokes';
import ReactHookForm from '../_components/ReactHookForm';

export default async function RealisticPage() {
  const jokes = await getJokes();

  return (
    <div className="flex flex-col gap-5">
      <h4>React Hook Form</h4>
      Optimistic update, client and server side validation
      <ReactHookForm jokes={jokes} />
    </div>
  );
}
