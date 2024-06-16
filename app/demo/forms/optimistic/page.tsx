import React from 'react';
import { getJokes } from '@/lib/services/getJokes';
import OptimisticForm from './_components/OptimisticForm';

export default async function OptimisticPage() {
  const jokes = await getJokes();

  return (
    <>
      <h4>Optimistic update</h4>
      Submitting with the experimental hook useOptimistic to update the UI before the server responds.
      <OptimisticForm jokes={jokes} />
    </>
  );
}
