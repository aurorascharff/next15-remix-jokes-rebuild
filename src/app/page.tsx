import Link from 'next/link';

export default function IndexPage() {
  return (
    <main className="h-full">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex flex-col justify-center items-center pt-12 pb-12">
          <h1 className="m-0 text-center font-display text-shadow text-6xl">
            Remix <span className="block text-9xl leading-none uppercase font-display">Jokes!</span>
          </h1>
          <nav>
            <ul className="m-0 p-0 flex gap-4 text-lg leading-none font-display list-none">
              <li>
                <Link prefetch className=" decoration-wavy decoration-1" href="jokes">
                  Read Jokes
                </Link>
              </li>
              <li>
                <Link prefetch className=" decoration-wavy decoration-1" href="/jokes.rss">
                  RSS
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}
