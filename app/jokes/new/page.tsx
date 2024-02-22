import React from 'react';
import { getJokeDraft } from '@/lib/services/getJokeDraft';
import { getJokes } from '@/lib/services/getJokes';
import Form from './_components/Form6';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New joke',
};

export default async function NewJokePage() {
  const jokeDraft = await getJokeDraft();
  const jokes = await getJokes();

  return <Form jokes={jokes} initialJoke={jokeDraft} />;
}
