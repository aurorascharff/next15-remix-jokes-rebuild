import Link from 'next/link';
import { getRandomJoke } from '@/lib/services/getRandomJoke';

export default async function JokesPage() {
  const randomJoke = await getRandomJoke();

  if (!randomJoke) {
    return <div>No jokes found</div>;
  }

  return (
    <div className="flex flex-col gap-y-4">
      <p>Heres a random joke:</p>
      <p>{randomJoke.content}</p>
      <Link href={`/jokes/${randomJoke.id}`}>{`"${randomJoke.name}" Permalink`}</Link>
    </div>
  );
}
