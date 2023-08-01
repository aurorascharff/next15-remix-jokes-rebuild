import Link from "next/link";

export default function IndexPage() {
  return (
    <main>
      <div className="container">
        <div className="content">
          <h1>
            Remix <span>Jokes!</span>
          </h1>
          <nav>
            <ul>
              <li>
                <Link href="jokes">Read Jokes</Link>
              </li>
              <li>
                <Link href="/jokes.rss">RSS</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}
