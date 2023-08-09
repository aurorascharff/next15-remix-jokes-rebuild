import React from 'react';
import { getJokes } from '@/src/actions/getJokes';
import OptimisticForm from '../_components/OptimisticForm';

export default async function OptimisticPage() {
  const jokes = await getJokes();

  return (
    <div className="flex flex-col gap-5">
      <h4>Optimistic update</h4>
      <OptimisticForm jokes={jokes} />
    </div>
  );
}
