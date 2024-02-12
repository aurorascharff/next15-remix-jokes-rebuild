'use client';

import React from 'react';
import { useThemeStore } from '../_store/themeStore';

export default function UseThemeComponent() {
  const { theme } = useThemeStore(state => {
    return state;
  });
  const bgColor = theme === 'yellow' ? 'bg-yellow' : 'bg-white';

  return <div className={`${bgColor} m-4 w-fit px-4 py-2 text-purple`}>{`Client component: ${theme}`}</div>;
}
