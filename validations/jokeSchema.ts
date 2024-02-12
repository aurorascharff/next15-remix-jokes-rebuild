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

export type JokeSchemaType = z.infer<typeof JokeSchema>;

export const JokeSchemaStricter = z.object({
  content: z.string().min(6, {
    message: 'Content must be at least 6 characters long',
  }),
  id: z.string().optional(),
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters long',
  }),
});
