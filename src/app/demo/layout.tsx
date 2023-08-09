import React from 'react';
import { Toaster } from 'react-hot-toast';
import NavBar from '@/src/components/NavBar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'React Server Components Demo',
  title: 'Demo',
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col gap-5 bg-purple">
      <Toaster position="top-right" />
      <NavBar
        routes={[
          {
            name: '<- Back',
            path: '/',
          },
          {
            name: 'Nesting',
            path: '/demo/nesting',
          },
          {
            name: 'Forms',
            path: '/demo/forms',
          },
        ]}
      />
      <div className="mx-10 flex h-full flex-col gap-10 py-3 md:mx-40 md:flex-row">{children}</div>
    </div>
  );
}
