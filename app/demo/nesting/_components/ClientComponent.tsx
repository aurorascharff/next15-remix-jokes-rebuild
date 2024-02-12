'use client';

import React, { useState } from 'react';

export default function ClientComponent({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  return (
    <div className="m-5 bg-yellow-dark p-5">
      <div className="flex flex-row justify-between gap-2">
        Client component
        <button
          className="rounded border-2 border-purple px-2"
          onClick={() => {
            return setCount(count => {
              console.log('CLIENT: this should only be printed on the client');
              return count + 1;
            });
          }}
        >
          +{count}
        </button>
      </div>
      {children}
    </div>
  );
}
