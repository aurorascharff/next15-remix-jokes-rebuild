import React from 'react';
import { NavLink } from './NavLink';

export type Route = {
  path: string;
  name: string;
};

export default function NavBar({ routes }: { routes: Route[] }) {
  return (
    <nav className="border-b-2 border-purple-light pb-6 md:pt-2">
      <div className="mx-10 flex w-fit max-w-xl flex-col items-center md:mx-40 md:flex-row md:gap-4">
        {routes.map(route => {
          return (
            <NavLink key={route.path} href={route.path}>
              {route.name}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
