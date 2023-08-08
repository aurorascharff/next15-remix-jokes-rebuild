import React from 'react';
import JokesList from '@/src/components/JokesList';
import ClientForm from './_components/ClientForm';
import ReactHookForm from './_components/ReactHookForm';
import ServerForm from './_components/ServerForm';

export default function FormsPage() {
  return (
    <div className="flex flex-row gap-10">
      <ClientForm />
      <ServerForm />
      <ReactHookForm />
      <div className="flex flex-col gap-5">
        <h4>Jokes</h4>
        <JokesList />
      </div>
    </div>
  );
}
