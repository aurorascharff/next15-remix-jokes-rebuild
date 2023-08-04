import React from 'react';
import ClientComponent from './components/ClientComponent';
import ServerComponent from './components/ServerComponent';

export default function NestingPage() {
  console.log('PARENT Server rendering: this should only be printed on the server');

  return (
    <div className=" flex flex-col gap-y-5">
      Server components in Client components
      <div className=" bg-yellow p-5 text-purple">
        Server component
        <ClientComponent>
          <ServerComponent />
        </ClientComponent>
      </div>
    </div>
  );
}
