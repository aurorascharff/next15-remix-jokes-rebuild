import { Joke } from "@prisma/client";
import Link from "next/link";
import React from "react";

export default function JokeDisplay({
  joke,
}: {
  joke: Pick<Joke, "content" | "name">;
}) {
  return (
    <div>
      <p>Heres your hilarious joke:</p>
      <p>{joke.content}</p>
      <Link href=".">{joke.name} Permalink</Link>
    </div>
  );
}
