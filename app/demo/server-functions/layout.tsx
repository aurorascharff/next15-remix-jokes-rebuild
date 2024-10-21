import React from 'react';

export default function ActionsTransitionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h4>Server Functions</h4>
      Server functions can be used outside forms, from anywhere. You can combine them with transitions to update the UI
      before the server responds.
      {children}
    </>
  );
}
