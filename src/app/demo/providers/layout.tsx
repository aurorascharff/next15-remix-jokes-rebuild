'use client';

import React from 'react';
import { ThemeContextProvider } from './_components/ThemeContext';

export default function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
}
