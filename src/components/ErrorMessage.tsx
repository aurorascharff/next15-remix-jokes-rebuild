import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function ErrorMessage({ children }: Props) {
  return <div className="rounded bg-red p-2">{children}</div>;
}
