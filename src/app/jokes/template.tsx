import React from 'react';
import Sidebar from '@/src/components/Sidebar';

export default function JokesTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <div className="flex-1">{children}</div>
    </>
  );
}
