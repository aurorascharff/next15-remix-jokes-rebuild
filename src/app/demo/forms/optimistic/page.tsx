import React from 'react';
import { getJokes } from '@/src/actions/getJokes';
import OptimisticForm from '../_components/OptimisticForm';

export default async function OptimisticPage() {
  const jokes = await getJokes();

  return (
    <div className="flex flex-col gap-5 xl:w-1/3">
      <h4>Optimistic update</h4>
      Submitting with the experimental hook useOptimistic to update the UI before the server responds.
      <OptimisticForm jokes={jokes} />
    </div>
  );
}
