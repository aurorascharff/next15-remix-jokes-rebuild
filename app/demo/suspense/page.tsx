import React, { Suspense } from 'react';
import { slow } from '@/utils/slow';
import Counter from '../_components/Counter';
import Jokes from './_components/Jokes';
import JokesHeader from './_components/JokesHeader';
import JokesSkeleton from './_components/JokesSkeleton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo - Suspense',
};

export default async function SuspensePage() {
  await slow(1000);

  return (
    <>
      <h4>Suspense</h4>
      Next.js App Router integrates Suspense by default for pages with loading.tsx. For additional suspenses, you can
      add them manually.
      <Suspense fallback={<div>Loading...</div>}>
        <JokesHeader />
        <div className="flex flex-row gap-4">
          The counter is interactive even though the jokes are not loaded yet. Without the suspenses the user would be
          waiting for the timeouts to finish before the page loads.
          <Counter />
        </div>
        <Suspense fallback={<JokesSkeleton />}>
          <Jokes />
        </Suspense>
      </Suspense>
    </>
  );
}
