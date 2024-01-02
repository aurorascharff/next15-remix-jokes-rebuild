import React from 'react';
import { Toaster } from 'react-hot-toast';
import NavBar from '@/src/app/demo/_components/NavBar';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  description: 'React Server Components Demo',
  title: 'Demo',
};

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
            path: '/demo/nesting',
          },
          {
            name: 'Revalidate',
            path: '/demo/revalidate',
          },
          {
            name: 'Global State',
            path: '/demo/global-state',
          },
          {
            name: 'Forms',
            path: '/demo/forms',
          },
          {
            name: 'React Query',
            path: '/demo/react-query',
          },
          {
            name: 'Suspense',
            path: '/demo/suspense',
          },
          {
            name: 'Server Actions & Transitions',
            path: '/demo/actions-transitions',
          },
        ]}
      />
      <div className="mx-10 flex flex-col gap-10 py-3 md:mx-40 md:flex-row">{children}</div>
    </div>
  );
}
