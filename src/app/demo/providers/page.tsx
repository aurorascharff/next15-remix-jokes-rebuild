import React from 'react';
import ServerComponent from './_components/ServerComponent';
import SetThemeComponent from './_components/SetThemeComponent';
import UseThemeComponent from './_components/UseThemeComponent';

export default function ProvidersPage() {
  return (
    <div className="flex flex-col gap-y-10">
      <h4>Providers</h4>
      <SetThemeComponent />
      <UseThemeComponent />
      <ServerComponent />
    </div>
  );
}
