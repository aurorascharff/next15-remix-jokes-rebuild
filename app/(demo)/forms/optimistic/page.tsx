import React from 'react';
import { getJokes } from '@/data/services/getJokes';
import OptimisticForm from './_components/OptimisticForm';

export default async function OptimisticPage() {
  const jokes = await getJokes();

  return (
    <>
      <h4>Optimistic update</h4>
      Submitting with the React 19 hook useOptimistic to update the UI before the server responds.
      <OptimisticForm jokes={jokes} />
    </>
  );
}
