import { Joke } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

export default function useGetJokes() {
  console.log('REFETCH');

  return useQuery({
    queryFn: async () => {
      const res = await fetch('/api/jokes');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await res.json();
      return json.map((joke: Joke) => ({
        ...joke,
        createdAt: new Date(joke.createdAt),
      }));
    },
    queryKey: ['jokes'],
    refetchInterval: 5000,
  });
}
