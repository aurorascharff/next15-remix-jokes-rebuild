import Link from "next/link";
import { prisma } from "@/db";

async function getRandomJoke() {
  const count = await prisma.joke.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [randomJoke] = await prisma.joke.findMany({
    skip: randomRowNumber,
    take: 1,
  });
  return randomJoke;
}

export default async function JokesPage() {
  const randomJoke = await getRandomJoke();

  return (
    <main className="jokes-main">
      <div>
        <p>Heres a random joke:</p>
        <p>{randomJoke.content}</p>
        <Link href={"jokes/" + randomJoke.id}>{randomJoke.name} Permalink</Link>
      </div>
    </main>
  );
}
