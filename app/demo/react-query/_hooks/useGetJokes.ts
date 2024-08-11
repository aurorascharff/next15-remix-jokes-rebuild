import { useQuery } from '@tanstack/react-query';

export default function useGetJokes() {
  console.log('REFETCH');

  return useQuery({
    queryFn: async () => {
      const res = await fetch('/api/jokes');
      if (!res.ok) {
        throw new Error('Failed to fetch jokes');
      }
      return res.json();
    },
    queryKey: ['jokes'],
    refetchInterval: 5000,
  });
}
