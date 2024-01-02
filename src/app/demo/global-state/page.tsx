import React from 'react';
import ServerComponent from './_components/ServerComponent';
import SetThemeComponent from './_components/SetThemeComponent';

import UseThemeComponent from './_components/UseThemeComponent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo - Global State',
};

export default function GlobalStatePage() {
  return (
    <div className="flex flex-col gap-y-10 xl:w-1/3">
      <h4>Global State</h4>
      To share a state between client components in different parts of the component tree, you can use a provider like
      React Context and wrap your components with the provider, or Zustand for a simpler implementation.
      <ServerComponent>
        <SetThemeComponent />
        <ServerComponent>
          <UseThemeComponent />
        </ServerComponent>
      </ServerComponent>
    </div>
  );
}
