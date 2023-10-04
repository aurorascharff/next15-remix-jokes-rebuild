import Link from 'next/link';
import { getRandomJoke } from '@/src/actions/getRandomJoke';

export default async function JokesPage() {
  const randomJoke = await getRandomJoke();

  return (
    <div className="flex flex-col gap-y-4">
      <p>Heres a random joke:</p>
      <p>{randomJoke.content}</p>
      <Link prefetch href={`/jokes/${randomJoke.id}`}>{`"${randomJoke.name}" Permalink`}</Link>
    </div>
  );
}
