'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { useTheme } from '../_providers/ThemeProvider';

export default function SetThemeComponent() {
  const { theme, setTheme } = useTheme();

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
