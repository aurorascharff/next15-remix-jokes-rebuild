import React from 'react';
import { getJokes } from '@/src/actions/getJokes';
import RealisticForm from '../_components/RealisticForm';

export default async function RealisticPage() {
  const jokes = await getJokes();

  return (
    <div className="flex flex-col gap-5">
      <h4>Realistic form</h4>
      Optimistic update, client and server side validation and React Hook Forms
      <RealisticForm jokes={jokes} />
    </div>
  );
}
