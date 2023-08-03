import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="pt-8 pb-4 border-t-2 border-purple-light">
      <div className="flex gap-4 max-w-xl mx-40">
        <Link prefetch href="/jokes.rss">
          RSS
        </Link>
        <Link href="https://remix.run/docs/en/main/tutorials/jokes">Remix Jokes</Link>
      </div>
    </footer>
  );
}
