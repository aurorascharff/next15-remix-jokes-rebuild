import { useQuery } from '@tanstack/react-query';
import type { Joke } from '@prisma/client';

export default function useGetJokes() {
  console.log('REFETCH');

  return useQuery({
    queryFn: async () => {
      const res = await fetch('/api/jokes');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await res.json();
      return json.map((joke: Joke) => {
        return {
          ...joke,
          createdAt: new Date(joke.createdAt),
        };
      });
    },
    queryKey: ['jokes'],
    refetchInterval: 5000,
  });
}
