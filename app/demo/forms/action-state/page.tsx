import React from 'react';
import JokesList from '@/components/JokesList';
import ActionStateForm from './_components/ActionStateForm';

export default async function ActionStateFormPage() {
  return (
    <>
      <h4>ActionState form</h4>
      The useActionState() hook can be used to manage form state and provide progressive enhancement.
      <ActionStateForm />
      <JokesList />
    </>
  );
}
