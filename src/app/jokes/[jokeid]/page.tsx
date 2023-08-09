import { notFound } from 'next/navigation';
import React from 'react';
import { deleteJoke } from '@/src/actions/deleteJoke';
import { getJoke } from '@/src/actions/getJoke';
import JokeDisplay from '@/src/components/JokeDisplay';
import type { Metadata } from 'next';

interface PageProps {
  params: { jokeid: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const joke = await getJoke(params.jokeid);

  return joke
    ? {
        description: `Enjoy the "${joke.name}" joke and much more`,
        title: `"${joke.name}" joke`,
      }
    : { description: 'No joke found', title: 'No joke' };
}

export default async function JokePage({ params }: PageProps) {
  const joke = await getJoke(params.jokeid);

  if (!joke) {
    notFound();
  }

  return <JokeDisplay joke={joke} deleteJoke={deleteJoke} />;
}
