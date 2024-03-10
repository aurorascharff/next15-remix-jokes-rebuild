import React from 'react';
import ServerComponent from './_components/ServerComponent';
import SetThemeComponent from './_components/SetThemeComponent';
import UseThemeComponent from './_components/UseThemeComponent';
import ThemeContextProvider from './_providers/ThemeContext';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo - Global State',
};

export default function GlobalStatePage() {
  return (
    <>
      <h4>Global state</h4>
      To share a state between client components in different parts of the component tree, you can use a provider like
      React Context and wrap your components with the provider, or Zustand for a simpler implementation.
      <ThemeContextProvider>
        <div className="flex flex-col gap-8 border-2 border-white p-4">
          ThemeProvider
          <ServerComponent>
            <SetThemeComponent />
            <ServerComponent>
              <UseThemeComponent />
            </ServerComponent>
          </ServerComponent>
        </div>
      </ThemeContextProvider>
    </>
  );
}
