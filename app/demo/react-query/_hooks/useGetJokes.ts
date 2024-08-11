import { useQuery } from '@tanstack/react-query';

export default function useGetJokes() {
  console.log('REFETCH');

  return useQuery({
    queryFn: async () => {
      const res = await fetch('/api/jokes');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    },
    queryKey: ['jokes'],
    refetchInterval: 5000,
  });
}
