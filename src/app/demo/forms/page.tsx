import React from 'react';
import NavButton from '@/src/components/NavButton';

export default async function FormsPage() {
  return (
    <div className="flex flex-col gap-y-10">
      <h4>Forms</h4>
      <NavButton href="/demo/forms/server">Server validation</NavButton>
      <NavButton href="/demo/forms/client">Client validation</NavButton>
      <NavButton href="/demo/forms/optimistic">Optimistic update</NavButton>
      <NavButton href="/demo/forms/react-hook">React Hook Form</NavButton>
    </div>
  );
}
