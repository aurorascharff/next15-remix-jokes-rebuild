import Link from 'next/link';
import { getRandomJoke } from '@/src/actions/getRandomJoke';

export default async function JokesPage() {
  const randomJoke = await getRandomJoke();

  return (
    <main className="pt-8 pb-8">
      <div>
        <p>Heres a random joke:</p>
        <p>{randomJoke.content}</p>
        <Link href={'/jokes/' + randomJoke.id}>{randomJoke.name} Permalink</Link>
      </div>
    </main>
  );
}
