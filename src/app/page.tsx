import Link from 'next/link';

export default function IndexPage() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center pt-12 pb-12">
          <h1 className="m-0 text-center font-display ">
            Remix <span className="block text-6xl leading-none uppercase font-display ">Jokes!</span>
          </h1>
          <nav>
            <ul className="m-0 p-0 flex gap-4 text-lg leading-none font-display">
              <li>
                <Link prefetch className=" decoration-wavy " href="jokes">
                  Read Jokes
                </Link>
              </li>
              <li>
                <Link prefetch className=" decoration-wavy " href="/jokes.rss">
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
