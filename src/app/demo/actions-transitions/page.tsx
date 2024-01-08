import { notFound } from 'next/navigation';
import React from 'react';
import { getRandomJoke } from '@/src/lib/services/getRandomJoke';
import DeleteJokeButton from './_components/DeleteJokeButton';
import UpdateJokeForm from './_components/UpdateJokeForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo - Server Actions & Transitions',
};

export default async function ActionsTransitionsPage() {
  const joke = await getRandomJoke();

  if (!joke) {
    notFound();
  }

  return (
    <>
      <UpdateJokeForm joke={joke} />
      <DeleteJokeButton jokeid={joke.id} />
    </>
  );
}
