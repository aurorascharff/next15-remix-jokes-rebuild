import React from 'react';
import { getRandomJoke } from '@/data/services/getRandomJoke';
import UpdateJokeForm from './_components/UpdateJokeForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo - Server Functions',
};

export default async function ServerFunctionsPage() {
  const joke = await getRandomJoke();

  if (!joke) {
    return <div>No jokes found</div>;
  }

  return <UpdateJokeForm joke={joke} />;
}
