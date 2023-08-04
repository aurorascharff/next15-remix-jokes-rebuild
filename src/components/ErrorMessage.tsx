import React from 'react';

export default function ErrorMessage({ children }: { children: React.ReactNode }) {
  return <div className="rounded bg-red p-2">{children}</div>;
}
