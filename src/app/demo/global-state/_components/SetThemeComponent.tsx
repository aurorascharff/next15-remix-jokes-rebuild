'use client';

import React from 'react';
import Button from '@/src/components/Button';

import { useTheme } from './useTheme';

export default function SetThemeComponent() {
  const { theme, setTheme } = useTheme(state => {
    return state;
  });

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
