import Link from 'next/link';

export default function IndexPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center pb-12 pt-12">
        <h1 className="text-center font-display text-6xl text-shadow">
          Next <span className="block font-display text-9xl uppercase leading-none">Jokes!</span>
        </h1>
        <h3 className="pb-2 text-center font-display text-shadow">Next 13 rebuild of Remix Jokes</h3>
        <nav>
          <ul className=" flex list-none gap-4 p-0 font-display text-lg leading-none">
            <li>
              <Link prefetch className=" decoration-wavy decoration-1" href="jokes">
                Read Jokes
              </Link>
            </li>
            <li>
              <Link prefetch className=" decoration-wavy decoration-1" href="api/jokes.rss">
                RSS
              </Link>
            </li>
            <li>
              <Link prefetch className=" decoration-wavy decoration-1" href="demo">
                Demo
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
