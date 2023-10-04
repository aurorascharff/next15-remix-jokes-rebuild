import React from 'react';
import JokesList from '@/src/components/JokesList';
import ReactHookForm from '../_components/ReactHookForm';

export default async function ReactHookPage() {
  return (
    <div className="flex flex-col gap-5 xl:w-1/3">
      <h4>React Hook Form</h4>
      Combining optimistic update, client and server side validation. Note that the content field&apos;s validation has
      been set to one more character in the server for demo purposes.
      <ReactHookForm />
      <JokesList />
    </div>
  );
}
