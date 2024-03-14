import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const JOKES = [
  {
    content: 'Why did the functions stop calling each other? Because they had constant arguments.',
    name: 'Functions',
  },
  {
    content: 'Why was the developer unhappy with their job? They wanted arrays.',
    name: 'Arrays',
  },
  {
    content: 'Why was the function sad after a successful first call? Because he didnt get a callback.',
    name: 'Callback',
  },
  {
    content: 'Why did the developer go broke? He used up all his cache.',
    name: 'Cache',
  },
  {
    content: 'Why couldnt the React component understand the joke? It didnt get the context.',
    name: 'React',
  },
  {
    content: 'Why did the angry function exceed the callstack size? It had beef with another function.',
    name: 'Callstack',
  },
  {
    content:
      'Why did the developer get stuck in the shower? The directions on the shampoo said: Lather, Rinse, Repeat.',
    name: 'Shampoo',
  },
  {
    content: 'Why do most Java programmers wear glasses? Because they dont see sharp.',
    name: 'Java',
  },
  {
    content: 'Why are Assembly programmers always soaking wet? They work below C-level.',
    name: 'Programmers',
  },
  {
    content: 'What do you call a developer who doesnt comment code? A developer.',
    name: 'Comments',
  },
  {
    content: 'Why did the child component have such great self-esteem? Because its parent kept giving it props!',
    name: 'JavaScript',
  },
  {
    content: 'Why did the web developer leave the restaurant? Because of the table layout.',
    name: 'Layout',
  },
  {
    content: 'What did the router say to the doctor? Its hurts when IP.',
    name: 'Router',
  },
];

function seedJokes() {
  Promise.all(
    JOKES.map(n => {
      return prisma.joke.create({ data: { content: n.content, name: n.name } });
    }),
  )
    .then(() => {
      return console.info('[SEED] Succussfully create joke records');
    })
    .catch(e => {
      return console.error('[SEED] Failed to create joke records', e);
    });
}

seedJokes();
