import React from 'react';
import JokesList from '@/components/JokesList';
import ConformForm from './_components/ConformForm';

export default async function ConformFormPage() {
  return (
    <>
      <h4>Conform form</h4>
      Conform builds on web standards and can be used with useActionState to build interactive, progressively enhanced
      forms that responds to blur or change events.
      <ConformForm />
      <JokesList />
    </>
  );
}
