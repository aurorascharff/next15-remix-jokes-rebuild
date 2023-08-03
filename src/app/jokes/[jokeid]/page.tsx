import { notFound } from 'next/navigation';
import React from 'react';
import { deleteJoke } from '@/src/actions/deleteJoke';
import { getJoke } from '@/src/actions/getJoke';
import JokeDisplay from '@/src/components/JokeDisplay';
import type { PageProps } from '@/.next/types/app/layout';

export default async function JokePage({ params }: PageProps) {
  const joke = await getJoke(params.jokeid);

  if (!joke) {
    notFound();
  }

  return <JokeDisplay joke={joke} deleteJoke={deleteJoke} />;
}
