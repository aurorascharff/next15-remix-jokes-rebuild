'use client';

import React, { createContext, useState } from 'react';
import type { Dispatch } from 'react';

type Theme = 'yellow' | 'white';

type ThemeContextType = {
  theme: Theme;
  setTheme: Dispatch<Theme>;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('yellow');

  return <ThemeContext.Provider value={{ setTheme, theme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
