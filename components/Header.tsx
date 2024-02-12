import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="border-b-2 border-purple-light py-4">
      <div className="mx-10 flex max-w-xl items-center justify-between lg:mx-40">
        <h1 className="text-5xl">
          <Link className="font-display text-white hover:no-underline" href="/">
            <span>J🤪KES</span>
          </Link>
        </h1>
      </div>
    </header>
  );
}
