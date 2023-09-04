'use server';

import { revalidatePath } from 'next/cache';

export async function revalidateJokes() {
  revalidatePath('/jokes');
}
