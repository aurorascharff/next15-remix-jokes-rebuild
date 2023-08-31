import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';

export async function getRandomJoke() {
  const count = await prisma.joke.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [randomJoke] = await prisma.joke.findMany({
    skip: randomRowNumber,
    take: 1,
  });
  revalidatePath('/jokes');
  return randomJoke;
}
