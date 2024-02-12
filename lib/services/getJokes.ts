import { prisma } from '@/db';
import 'server-only';

export async function getJokes() {
  return prisma.joke.findMany();
}
