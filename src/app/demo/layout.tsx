import React from 'react';
import NavBar from '@/src/components/NavBar';

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col gap-5 bg-purple">
      <NavBar
        routes={[
          {
            name: '<- Back',
            path: '/',
          },
          {
            name: 'Home',
            path: '/demo',
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
