'use client';

import React from 'react';
import Button from '@/src/components/Button';
import { useThemeContext } from './ThemeContext';

export default function SetThemeComponent() {
  const { theme, setTheme } = useThemeContext();

  return (
    <div className="flex flex-row gap-5 py-5">
      <Button
        color="white"
        disabled={theme === 'white'}
        onClick={() => {
          return setTheme('white');
        }}
      >
        White
      </Button>
      <Button
        disabled={theme === 'yellow'}
        onClick={() => {
          return setTheme('yellow');
        }}
      >
        Yellow
      </Button>
    </div>
  );
}
