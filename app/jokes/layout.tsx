import { prisma } from "@/db";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jokes",
  description: "Jokes Demo",
};

function getJokes() {
  return prisma.joke.findMany();
}

export default async function JokesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jokes = await getJokes();

  return (
    <div className="jokes-layout">
      <header className="jokes-header">
        <div className="container">
          <h1 className="home-link">
            <Link href="/" title="Remix Jokes" aria-label="Remix Jokes">
              <span className="logo">🤪</span>
              <span className="logo-medium">J🤪KES</span>
            </Link>
          </h1>
        </div>
      </header>
      <div className="container">
        <div className="jokes-list">
          <Link href="jokes/.">Get a random joke</Link>
          <p>Here are a few more jokes to check out:</p>
          <ul>
            {jokes.map(({ id, name }) => (
              <li key={id}>
                <Link href={"jokes/" + id}>{name}</Link>
              </li>
            ))}
          </ul>
          <Link href="jokes/new" className="button">
            Add your own
          </Link>
        </div>
      </div>
      {children}
      <footer className="jokes-footer">
        <div className="container">
          <Link href="/jokes.rss">RSS</Link>
        </div>
      </footer>
    </div>
  );
}
