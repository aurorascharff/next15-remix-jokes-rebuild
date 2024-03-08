import React from 'react';
import Form from './_components/Form4';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New joke',
};

export default async function NewJokePage() {
  return <Form />;
}
