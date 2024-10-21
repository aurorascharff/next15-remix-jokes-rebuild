'use client';

import React from 'react';
import { useTheme } from '../_providers/ThemeProvider';

export default function UseThemeComponent() {
  const { theme } = useTheme();
  const bgColor = theme === 'yellow' ? 'bg-yellow' : 'bg-white';

  return <div className={`${bgColor} m-4 w-fit px-4 py-2 text-purple`}>{`Client component: ${theme}`}</div>;
}
