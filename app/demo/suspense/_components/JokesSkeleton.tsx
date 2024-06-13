import React from 'react';

export default function JokesSkeleton() {
  return (
    <div className="mt-5 rounded-md bg-gradient-to-r from-purple-dark to-purple p-2.5">
      <div className="m-2.5 block h-5 w-2/5 rounded bg-purple" />
      <div className="m-2.5 block h-5 w-2/5 rounded bg-purple" />
      <div className="m-2.5 block h-5 w-2/5 rounded bg-purple" />
    </div>
  );
}
