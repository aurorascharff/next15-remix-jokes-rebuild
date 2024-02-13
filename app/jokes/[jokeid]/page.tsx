import Link from 'next/link';
import React from 'react';
import DeleteJokeButton from '@/components/DeleteJokeButton';
import { getJoke } from '@/lib/services/getJoke';
import type { Metadata } from 'next';

type PageProps = {
  params: { jokeid: string };
};

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

  return (
    <div className="flex flex-col gap-y-4">
      <p>Heres your hilarious joke:</p>
      <p>{joke.content}</p>
      <Link prefetch href={`/jokes/${joke.id}`}>{`"${joke.name}" Permalink`}</Link>
      <DeleteJokeButton jokeid={joke.id} />
    </div>
  );
}
