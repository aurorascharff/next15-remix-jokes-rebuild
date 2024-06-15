import React from 'react';
import NavButton from '@/components/ui/NavButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo - Forms',
};

export default async function FormsPage() {
  return (
    <>
      <h4>Forms</h4>
      <NavButton href="/demo/forms/server">Server validation</NavButton>
      <NavButton href="/demo/forms/client">Client validation</NavButton>
      <NavButton href="/demo/forms/optimistic">Optimistic update</NavButton>
      <NavButton href="/demo/forms/react-hook">React Hook Form</NavButton>
      <NavButton href="/demo/forms/action-state">ActionState form</NavButton>
    </>
  );
}
