import React from 'react';
import { getJokeDraft } from '@/lib/services/getJokeDraft';
import Form from './_components/Form6';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New joke',
};

export default async function NewJokePage() {
  const jokeDraft = await getJokeDraft();

  return <Form initialJoke={jokeDraft} />;
}
