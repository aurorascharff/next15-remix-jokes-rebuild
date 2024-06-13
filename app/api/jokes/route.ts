import { prisma } from '@/db';

export async function GET() {
  const contacts = await prisma.joke.findMany({
    orderBy: { createdAt: 'desc' },
  });

  const json = JSON.stringify(contacts);

  return new Response(json, {
    headers: {
      'content-type': 'application/json',
    },
  });
}
