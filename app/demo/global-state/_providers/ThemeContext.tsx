'use client';

import React, { createContext, useState } from 'react';
import type { Dispatch } from 'react';

type Theme = 'yellow' | 'white';

type ThemeContextType = {
  theme: Theme;
  setTheme: Dispatch<Theme>;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('yellow');

  return <ThemeContext.Provider value={{ setTheme, theme }}>{children}</ThemeContext.Provider>;
};

export function useThemeContext() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider');
  }
  return context;
}
