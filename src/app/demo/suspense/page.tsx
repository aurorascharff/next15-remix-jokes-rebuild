import React, { Suspense } from 'react';
import Counter from './_components/Counter';
import Jokes from './_components/Jokes';
import JokesHeader from './_components/JokesHeader';
import JokesSkeleton from './_components/JokesSkeleton';
import type { Metadata } from 'next';
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Demo - Suspense',
};

export default function SuspensePage() {
  return (
    <div className="flex flex-col gap-y-10 xl:w-1/3">
      <h4>Suspense</h4>
      Next.js 13 integrates Suspense by default for pages with loading.tsx. For additional suspense, you can add them
      manually.
      <Suspense fallback={<div>Loading...</div>}>
        <JokesHeader />
        <div className="flex flex-row gap-4">
          The counter is interactive even though the jokes are not loaded yet. WIthout the suspenses the user would be
          waiting for the timeouts to finish before the page loads.
          <Counter />
        </div>
        <Suspense fallback={<JokesSkeleton />}>
          <Jokes />
        </Suspense>
      </Suspense>
    </div>
  );
}
