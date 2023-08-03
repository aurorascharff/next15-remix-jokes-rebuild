import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// shout-out to https://icanhazdadjoke.com/
const JOKES = [
  {
    content:
      'I never wanted to believe that my Dad was stealing from his job as a road worker. But when I got home, all the signs were there.',
    name: 'Road worker',
  },
  {
    content: 'I was wondering why the frisbee was getting bigger, then it hit me.',
    name: 'Frisbee',
  },
  {
    content: 'Why do trees seem suspicious on sunny days? Dunno, theyre just a bit shady.',
    name: 'Trees',
  },
  {
    content: 'Why dont skeletons ride roller coasters? They dont have the stomach for it.',
    name: 'Skeletons',
  },
  {
    content: 'Why dont you find hippopotamuses hiding in trees? Theyre really good at it.',
    name: 'Hippos',
  },
  {
    content: 'What did one plate say to the other plate? Dinner is on me!',
    name: 'Dinner',
  },
  {
    content: 'My first time using an elevator was an uplifting experience. The second time let me down.',
    name: 'Elevator',
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
