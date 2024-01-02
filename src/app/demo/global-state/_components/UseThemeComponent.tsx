'use client';

import React from 'react';

import { useTheme } from './useTheme';

export default function UseThemeComponent() {
  const { theme } = useTheme(state => {
    return state;
  });
  const bgColor = theme === 'yellow' ? 'bg-yellow' : 'bg-white';

  return <div className={`${bgColor} m-4 w-fit px-4 py-2 text-purple`}>{`Client component: ${theme}`}</div>;
}
