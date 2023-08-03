import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="pt-4 pb-4 border-b-2 border-purple-light ">
      <div className="flex justify-between items-center max-w-xl mx-40">
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
