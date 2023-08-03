import Joke from '@/components/Joke';
import { notFound } from 'next/navigation';
import React from 'react';
import { getJoke } from '@/actions/getJoke';
import { deleteJoke } from '@/actions/deleteJoke';

interface Props {
  params: any;
}

export default async function JokePage({ params }: Props) {
  const joke = await getJoke(params.jokeid);

  if (!joke) {
    notFound();
  }

  return <Joke joke={joke} deleteJoke={deleteJoke} />;
}
