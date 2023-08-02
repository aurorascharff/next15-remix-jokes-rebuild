import Joke from '@/components/Joke';
import { prisma } from '@/db';
import { notFound } from 'next/navigation';
import React from 'react';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

interface Props {
  params: any;
}

async function deleteJoke(jokeId: string) {
  'use server';

  await prisma.joke.delete({ where: { id: jokeId } });
  revalidatePath('/jokes');
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

  return <Joke joke={joke} deleteJoke={deleteJoke} />;
}
