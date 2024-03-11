'use client';

import React, { createContext, useOptimistic } from 'react';
import type { JokeSchemaType } from '@/validations/jokeSchema';
import { Joke } from '@prisma/client';

type JokesContextType = {
  optimisticJokes: JokeSchemaType[];
  addOptimisticJoke: (_joke: FormData) => void;
};

export const JokesContext = createContext<JokesContextType | undefined>(undefined);

export default function JokesContextProvider({ children, jokes }: { children: React.ReactNode; jokes: Joke[] }) {
  const [optimisticJokes, addOptimisticJoke] = useOptimistic(jokes, (state: JokeSchemaType[], newJoke: FormData) => {
    return [
      ...state,
      {
        content: newJoke.get('content')?.valueOf() as string,
        createdAt: new Date(),
        name: newJoke.get('name')?.valueOf() as string,
      },
    ];
  });

  return <JokesContext.Provider value={{ addOptimisticJoke, optimisticJokes }}>{children}</JokesContext.Provider>;
}

export function useJokesContext() {
  const context = React.useContext(JokesContext);
  if (context === undefined) {
    throw new Error('useJokesContext must be used within a JokesContextProvider');
  }
  return context;
}
