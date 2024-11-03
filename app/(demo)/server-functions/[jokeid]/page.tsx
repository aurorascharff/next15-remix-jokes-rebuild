import React from 'react';
import { getJoke } from '@/data/services/getJoke';
import UpdateJokeForm from '../_components/UpdateJokeForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo - Transitions',
};

type PageProps = {
  params: Promise<{ jokeid: string }>;
};

export default async function ActionsTransitionsJokePage({ params }: PageProps) {
  const joke = await getJoke((await params).jokeid);

  return <UpdateJokeForm joke={joke} />;
}
