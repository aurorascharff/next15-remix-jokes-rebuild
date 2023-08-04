import Link from 'next/link';
import { getRandomJoke } from '@/src/actions/getRandomJoke';

export default async function JokesPage() {
  const randomJoke = await getRandomJoke();

  return (
    <main className="h-full pb-8 pt-8">
      <div>
        <p>Heres a random joke:</p>
        <p>{randomJoke.content}</p>
        <Link prefetch href={'/jokes/' + randomJoke.id}>
          &quot;{randomJoke.name}&quot; Permalink
        </Link>
      </div>
    </main>
  );
}
