import React from 'react';
import { Toaster } from 'react-hot-toast';
import NavBar from './_components/NavBar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'React Server Components Demo',
  title: 'Demo',
};

// Tell Next.js to always generate this page on the server (dynamic rather than static)
export const dynamic = 'force-dynamic';

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[100svh] w-full flex-col gap-5 bg-purple py-4">
      <Toaster position="top-right" />
      <NavBar
        routes={[
          {
            name: '<- Back',
            path: '/',
          },
          {
            name: 'Nesting',
            path: '/nesting',
          },
          {
            name: 'Revalidate',
            path: '/revalidate',
          },
          {
            name: 'Global State',
            path: '/global-state',
          },
          {
            name: 'Forms',
            path: '/forms',
          },
          {
            name: 'Suspense',
            path: '/suspense',
          },
          {
            name: 'React Query',
            path: '/react-query',
          },
          {
            name: 'Server Functions',
            path: '/server-functions',
          },
        ]}
      />
      <div className="mx-10 flex flex-col gap-8 py-3 md:mx-40 xl:w-1/3">{children}</div>
    </div>
  );
}
