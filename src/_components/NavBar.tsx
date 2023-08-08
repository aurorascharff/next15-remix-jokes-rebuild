import React from 'react';
import { NavLink } from '@/src/_components/NavLink';

export interface Route {
  path: string;
  name: string;
}

interface Props {
  routes: Route[];
}

export default function NavBar({ routes }: Props) {
  return (
    <nav className="border-b-2 border-purple-light pb-4 pt-4">
      <div className="mx-10 flex max-w-xl items-center gap-4 md:mx-40">
        {routes.map(route => {
          return (
            <NavLink exact key={route.path} href={route.path}>
              {route.name}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
