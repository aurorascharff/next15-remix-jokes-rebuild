import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import JokeForm from '@/components/JokeForm';
import ErrorMessage from '@/components/ui/ErrorMessage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New joke',
};

export default function NewJokePage() {
  return (
    <ErrorBoundary fallback={<ErrorMessage>⚠️Something went wrong</ErrorMessage>}>
      <JokeForm />
    </ErrorBoundary>
  );
}
