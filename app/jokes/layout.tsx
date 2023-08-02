import Button from '@/components/Button';
import NavigateButton from '@/components/NavigateButton';
import { prisma } from '@/db';
import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Jokes',
  description: 'Jokes Demo',
};

function getJokes() {
  return prisma.joke.findMany();
}

export default async function JokesLayout({ children }: { children: React.ReactNode }) {
  const jokes = await getJokes();

  return (
    <div className="flex flex-col bg-purple h-100">
      <header className="pt-4 pb-4 border-b-2 border-purple-light">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl">
            <Link className="text-white font-display" href="/" title="Remix Jokes" aria-label="Remix Jokes">
              <span>J🤪KES</span>
            </Link>
          </h1>
        </div>
      </header>
      <div className="flex justify-between items-center">
        <div>
          <Link className="text-yellow" href="/jokes">
            Get a random joke
          </Link>
          <p className="text-white">Here are a few more jokes to check out:</p>
          <ul>
            {jokes.map(({ id, name }) => (
              <li key={id}>
                <Link className="text-yellow hover:underline" href={'/jokes/' + id}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <NavigateButton href="/jokes/new">Add your own</NavigateButton>
        </div>
        {children}
      </div>
      <footer className="pt-8 pb-4 border-t-2 border-purple-light">
        <div className="flex gap-4">
          <Link className="text-yellow hover:underline" href="/jokes.rss">
            RSS
          </Link>
        </div>
      </footer>
    </div>
  );
}
