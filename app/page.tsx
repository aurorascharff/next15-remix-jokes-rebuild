import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex grow flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center pb-12 pt-12">
        <h1 className="text-center font-display text-6xl text-shadow">
          Next <span className="block font-display text-6xl uppercase leading-none md:text-9xl">Jokes!</span>
        </h1>
        <h2 className="h3 pb-2 text-center font-display text-shadow">Next.js 15 rebuild of Remix Jokes</h2>
        <nav>
          <ul className="flex list-none gap-4 p-0 font-display text-lg leading-none">
            <li>
              <Link className="decoration-wavy decoration-1" href="jokes">
                Read Jokes
              </Link>
            </li>
            <li>
              <Link className="decoration-wavy decoration-1" href="/api/jokes.rss">
                RSS
              </Link>
            </li>
            <li>
              <Link className="decoration-wavy decoration-1" href="demo">
                Demo
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
