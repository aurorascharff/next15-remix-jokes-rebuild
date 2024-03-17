import React from 'react';
import JokeForm from './_components/Form4';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New joke',
};

export default function NewJokePage() {
  return <JokeForm />;
}
