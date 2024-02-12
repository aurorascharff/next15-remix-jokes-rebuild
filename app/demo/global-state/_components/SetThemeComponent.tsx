'use client';

import React from 'react';
import Button from '@/components/Button';
import { useThemeStore } from '../_store/themeStore';

export default function SetThemeComponent() {
  const { theme, setTheme } = useThemeStore(state => {
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
