import Link from 'next/link';
import { prisma } from '@/db';

async function getRandomJoke() {
  const count = await prisma.joke.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [randomJoke] = await prisma.joke.findMany({
    skip: randomRowNumber,
    take: 1,
  });
  return randomJoke;
}

export default async function JokesPage() {
  const randomJoke = await getRandomJoke();

  return (
    <main className="pt-8 pb-8">
      <div>
        <p className="text-white">Heres a random joke:</p>
        <p className="text-white">{randomJoke.content}</p>
        <Link className="text-white" href={'/jokes/' + randomJoke.id}>
          {randomJoke.name} Permalink
        </Link>
      </div>
    </main>
  );
}
