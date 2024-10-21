import React from 'react';

export default function ServerComponent({ children }: { children: React.ReactNode }) {
  console.log('SERVER: this should only be printed on the server');

  return <div className="border border-yellow p-8 text-yellow">Server component{children}</div>;
}
