'use client';

import React from 'react';
import { useThemeContext } from './ThemeContext';

export default function UseThemeComponent() {
  const { theme } = useThemeContext();

  return <div className={`text-${theme}`}>{`Selected theme: ${theme}`}</div>;
}
