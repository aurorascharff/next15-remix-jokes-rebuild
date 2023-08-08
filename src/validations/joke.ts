import { z } from 'zod';

export const JokeSchema = z.object({
  content: z.string().min(5, {
    message: 'Content must be at least 5 characters long',
  }),
  id: z.string().optional(),
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters long',
  }),
});
