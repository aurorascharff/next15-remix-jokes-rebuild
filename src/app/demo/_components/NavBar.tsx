import React from 'react';
import { NavLink } from '../../../components/NavLink';

export type Route = {
  path: string;
  name: string;
};

type Props = {
  routes: Route[];
};

export default function NavBar({ routes }: Props) {
  return (
    <nav className="border-b-2 border-purple-light py-[30px]">
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
