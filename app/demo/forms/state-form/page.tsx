import React from 'react';
import JokesList from '@/components/JokesList';
import StateForm from '../_components/StateForm';

export default async function FormStatePage() {
  return (
    <>
      <h4>FormState form</h4>
      The useFormState() and useFormStatus() hooks can be used to manage form state and provide progressive enhancement.
      <StateForm />
      <JokesList />
    </>
  );
}
