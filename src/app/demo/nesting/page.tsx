import React from 'react';
import ClientComponent from './_components/ClientComponent';
import ServerComponent from './_components/ServerComponent';

export default function NestingPage() {
  console.log('PARENT SERVER: this should only be printed on the server');

  return (
    <div className=" flex flex-col gap-y-10">
      <h4>Server components in client components</h4>
      <div className=" bg-yellow p-5 text-purple">
        Server component
        <ClientComponent>
          <ServerComponent />
        </ClientComponent>
      </div>
    </div>
  );
}
