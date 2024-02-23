'use client';

import { JokeSchemaType } from '@/validations/jokeSchema';
import React, { createContext, useOptimistic, useState } from 'react';

type JokesContextType = {
  optimisticJokes: JokeSchemaType[];
  addOptimisticJoke: (joke: JokeSchemaType) => void;
};

export const JokesContext = createContext<JokesContextType | undefined>(undefined);

export default function JokesContextProvider({
  children,
  jokes,
}: {
  children: React.ReactNode;
  jokes: JokeSchemaType[];
}) {
  const [optimisticJokes, addOptimisticJoke] = useOptimistic(
    jokes,
    (state: JokeSchemaType[], newJoke: JokeSchemaType) => {
      return [...state, newJoke];
    },
  );

  return <JokesContext.Provider value={{ optimisticJokes, addOptimisticJoke }}>{children}</JokesContext.Provider>;
}

export function useJokesContext() {
  const context = React.useContext(JokesContext);
  if (context === undefined) {
    throw new Error('useJokesContext must be used within a JokesContextProvider');
  }
  return context;
}
