# Next 14 "Remix Jokes" Rebuild

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It is a rebuild of [Remix Jokes](https://remix.run/docs/en/main/tutorials/jokes) using Next 14 with Server Actions, Tailwind CSS, and Prisma.

It has additional /demo routes for React Server Component and Next 14 functionality examples.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Getting Started

First, `npm install` and run the development server with `npm run dev`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Prisma Setup

Add a `.env` file to the root of the project, refer to `.env.sample` for the required environment variables.
You need decide between prisma local development with `sqlite` or a real database with for example `sqlserver`. Define it in the `schema.prisma` file.

When using sqlserver, you need to migrate the database schema with:

```bash
npm run prisma.migrate
```

When using sqllite, initialize with:

```bash
npm run prisma.push
```

Seed prisma/seed.ts for initial data:

```sh
npm run prisma.seed
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
