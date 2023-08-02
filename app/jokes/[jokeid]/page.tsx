import Joke from '@/components/Joke';
import { prisma } from '@/db';
import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
  params: any;
}

function getJoke(jokeId: string) {
  return prisma.joke.findUnique({
    where: { id: jokeId },
  });
}

export default async function JokePage({ params }: Props) {
  const joke = await getJoke(params.jokeid);

  if (!joke) {
    notFound();
  }

  return <Joke joke={joke} />;
}
