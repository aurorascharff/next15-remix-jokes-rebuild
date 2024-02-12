import React from 'react';
import JokesList from '@/components/JokesList';
import StateForm from '../_components/StateForm';

export default async function FormStatePage() {
  return (
    <div className="flex flex-col gap-5 xl:w-1/3">
      <h4>FormState form</h4>
      The useFormState() and useFormStatus() hooks can be used to manage form state and provide progressive enhancement.
      <StateForm />
      <JokesList />
    </div>
  );
}
