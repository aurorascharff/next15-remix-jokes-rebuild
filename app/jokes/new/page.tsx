import React from 'react';
import Form from './_components/Form3';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New joke',
};

export default function NewJokePage() {
  return <Form />;
}
