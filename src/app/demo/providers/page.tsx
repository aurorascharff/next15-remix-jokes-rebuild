import React from 'react';
import ServerComponent from './_components/ServerComponent';
import SetThemeComponent from './_components/SetThemeComponent';
import { ThemeContextProvider } from './_components/ThemeContext';
import UseThemeComponent from './_components/UseThemeComponent';

export default function ProvidersPage() {
  return (
    <div className="flex flex-col gap-y-10 xl:w-1/3">
      <h4>Providers</h4>
      To share a state between client components in different parts of the component tree, you can use a provider.
      <ThemeContextProvider>
        <div className=" flex flex-col gap-8 border-2 border-white p-4">
          ThemeProvider
          <ServerComponent>
            <SetThemeComponent />
            <ServerComponent>
              <UseThemeComponent />
            </ServerComponent>
          </ServerComponent>
        </div>
      </ThemeContextProvider>
    </div>
  );
}
