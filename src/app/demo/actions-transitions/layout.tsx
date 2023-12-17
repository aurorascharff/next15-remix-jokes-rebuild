import React from 'react';

export default function ActionsTransitionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-y-10 xl:w-1/3">
      <h4>Server Actions and Transitions</h4>
      Server actions can be used outside forms, from anywhere. You can combine them with transitions to update the UI
      before the server responds.
      {children}
    </div>
  );
}
