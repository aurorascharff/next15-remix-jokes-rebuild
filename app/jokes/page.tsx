import { getRandomJoke } from '@/actions/getRandomJoke';
import Link from 'next/link';

export default async function JokesPage() {
  const randomJoke = await getRandomJoke();

  return (
    <main className="pt-8 pb-8">
      <div>
        <p className="text-white">Heres a random joke:</p>
        <p className="text-white">{randomJoke.content}</p>
        <Link className="text-yellow hover:underline" href={'/jokes/' + randomJoke.id}>
          {randomJoke.name} Permalink
        </Link>
      </div>
    </main>
  );
}
