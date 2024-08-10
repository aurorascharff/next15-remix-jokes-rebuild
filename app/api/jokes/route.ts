import { NextResponse } from 'next/server';
import { prisma } from '@/db';

export async function GET() {
  const jokes = await prisma.joke.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(jokes, { status: 200 });
}
