import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="border-b-2 border-purple-light pb-4 pt-4 ">
      <div className="mx-40 flex max-w-xl items-center justify-between">
        <h1 className="text-5xl">
          <Link
            prefetch
            className="font-display text-white hover:no-underline"
            href="/"
            title="Remix Jokes"
            aria-label="Remix Jokes"
          >
            <span>J🤪KES</span>
          </Link>
        </h1>
      </div>
    </header>
  );
}
