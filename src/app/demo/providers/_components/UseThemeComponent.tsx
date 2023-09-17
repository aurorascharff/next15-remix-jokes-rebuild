'use client';

import React from 'react';
import { useThemeContext } from './ThemeContext';

export default function UseThemeComponent() {
  const { theme } = useThemeContext();

  return <div className={`bg-${theme} m-4 w-fit px-4 py-2 text-purple`}>{`Client component: ${theme}`}</div>;
}
