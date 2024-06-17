import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t-2 border-purple-light pb-4 pt-8">
      <div className="mx-10 flex max-w-xl gap-4 md:mx-40">
        <Link href="/api/jokes.rss">RSS</Link>
        <Link target="_blank" href="https://remix.run/docs/en/main/tutorials/jokes">
          Remix Jokes
        </Link>
        <Link href="/demo">Demo</Link>
        <Link target="_blank" href="https://github.com/aurorascharff/next14-remix-jokes-rebuild">
          GitHub
        </Link>
      </div>
    </footer>
  );
}
