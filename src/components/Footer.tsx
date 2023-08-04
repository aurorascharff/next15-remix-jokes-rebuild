import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t-2 border-purple-light pb-4 pt-8">
      <div className="mx-40 flex max-w-xl gap-4">
        <Link prefetch href="/jokes.rss">
          RSS
        </Link>
        <Link href="https://remix.run/docs/en/main/tutorials/jokes">Remix Jokes</Link>
      </div>
    </footer>
  );
}
