import JokeDisplay from "@/app/components/joke";
import { prisma } from "@/db";
import { notFound } from "next/navigation";
import React from "react";

interface PageProps {
  params: any;
}

function getJoke(jokeId: string) {
  return prisma.joke.findUnique({
    where: { id: jokeId },
  });
}

export default async function JokePage({ params }: PageProps) {
  const joke = await getJoke(params.jokeid);

  if (!joke) {
    notFound();
  }

  return <JokeDisplay joke={joke} />;
}
