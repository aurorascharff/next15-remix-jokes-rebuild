import React from 'react';
import { getRandomJoke } from '@/lib/services/getRandomJoke';
import UpdateJokeForm from './_components/UpdateJokeForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo - Server Actions & Transitions',
};

export default async function ActionsTransitionsPage() {
  const joke = await getRandomJoke();

  if (!joke) {
    return <div>No jokes found</div>;
  }

  return <UpdateJokeForm joke={joke} />;
}
