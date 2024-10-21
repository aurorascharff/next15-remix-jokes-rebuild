import React from 'react';
import ServerComponent from './_components/ServerComponent';
import SetThemeComponent from './_components/SetThemeComponent';
import UseThemeComponent from './_components/UseThemeComponent';
import ThemeProvider from './_providers/ThemeProvider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo - Global State',
};

export default function GlobalStatePage() {
  return (
    <>
      <h4>Global State</h4>
      To share a state between client components in different parts of the component tree, you can create a provider
      with React Context and wrap your components with it, or a Zustand store for a simpler implementation.
      <ThemeProvider>
        <div className="flex flex-col gap-8 border-2 border-white p-4">
          ThemeProvider
          <ServerComponent>
            <SetThemeComponent />
            <ServerComponent>
              <UseThemeComponent />
            </ServerComponent>
          </ServerComponent>
        </div>
      </ThemeProvider>
    </>
  );
}
