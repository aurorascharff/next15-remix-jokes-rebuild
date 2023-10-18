'use client';

import React from 'react';
import { useThemeContext } from './ThemeContext';

export default function UseThemeComponent() {
  const { theme } = useThemeContext();
  const bgColor = theme === 'yellow' ? 'bg-yellow' : 'bg-white';

  return <div className={`${bgColor} m-4 w-fit px-4 py-2 text-purple`}>{`Client component: ${theme}`}</div>;
}
