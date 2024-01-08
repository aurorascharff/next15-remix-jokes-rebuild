import { notFound } from 'next/navigation';
import React from 'react';
import { getJoke } from '@/src/lib/services/getJoke';
import DeleteJokeButton from '../_components/DeleteJokeButton';
import UpdateJokeForm from '../_components/UpdateJokeForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo - Transitions',
};

type PageProps = {
  params: { jokeid: string };
};

export default async function ActionsTransitionsJokePage({ params }: PageProps) {
  const joke = await getJoke(params.jokeid);

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
