import Link from 'next/link';

export default function IndexPage() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center pt-12 pb-12">
          <h1 className="m-0 text-center font-display text-white">
            Remix <span className="block text-6xl leading-none uppercase font-display text-white">Jokes!</span>
          </h1>
          <nav>
            <ul className="m-0 p-0 flex gap-4 text-lg leading-none font-display">
              <li>
                <Link className="hover:underline decoration-wavy text-yellow" href="jokes">
                  Read Jokes
                </Link>
              </li>
              <li>
                <Link className="hover:underline decoration-wavy text-yellow" href="/jokes.rss">
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
