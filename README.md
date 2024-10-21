# Next.js 15 "Remix Jokes" Rebuild

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It is a rebuild of [Remix Jokes](https://remix.run/docs/en/main/tutorials/jokes) using Next.js 15 with Server Functions, Tailwind CSS, and Prisma.

It has additional /demo routes for React Server Component and Next.js 15 functionality examples.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Getting Started

First, force install the dependencies to make the React 19 Beta work:

```bash
npm install --force
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Prisma Setup

Add a `.env` file to the root of the project, refer to `.env.sample` for the required environment variables.
You need decide between prisma local development with `sqlite` or a real database with for example `sqlserver`. Define it in the `schema.prisma` file.

After switching, delete the `prisma/migrations` folder before running the migration command.

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

## Development Info

### Development Tools

The project uses [ESLint](https://eslint.org/) for linting and [Prettier](https://prettier.io/) for code formatting. The configuration for these tools is located in `.eslintrc.js` and `.prettierrc.js`. The project is configured to run code formatting and linting on save in Visual Studio Code. Verify that code formatting and linting is executed on save as configured. Opening the `.code-workspace` file will ensure the correct extentions are set.

### Naming Conventions

- Pascal case for components
- Kebab case for folders
- Camel case for other files

### Folder Structure

With Next.js, the folder structure is very important. The following folders are required:

- `public` - contains the static assets of the application
- `/` - contains the source code of the application
- `/app` - contains the pages of the application using file based routing. Folders below this directory will be routes in the application unless they are prefixed with an underscore `_` (ignore from routing) or grouped with parentheses `()` (ignore but keep subfolders in routing).
- When using brackets `[]` in the name of a folder, the folder will be a dynamic route. The name of the folder will be the name of the parameter in the route.
- For each route inside `/app` that is meant to be a route, there should be a `page.tsx` and alternatively `layout.tsx` for the route.
- Each route can also have a `error.tsx` page for error handling, and a `not-found.tsx` page for handling 404 errors.
- `/components` - contains shared components used across the application, same goes for the other folders in `/`.
- `/data` - contains server-side data fetching and mutations.
- For each route, `_components` can be used to store components that are only used in that route. Same goes for `_hooks`, `_utils`, etc. Every page folder should contain everything it needs to work. And every component or function should live at the nearest shared space in the hierarchy.

Refer to the [Next.js App Router](https://nextjs.org/docs/app) documentation for more information.

### Styling

The project uses [Tailwind CSS](https://tailwindcss.com/) for styling. Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom designs without leaving your HTML. The theme is configured in `tailwind.config.js`. Default styles are applied in `/app/globals.css`.

Use the `cn` util when merging conditional classes with other classes. Excess styling is applied in the components using Tailwind CSS utility classes. Tailwind also controls the responsive design of the application with a mobile-first approach. Refer to the Tailwind CSS documentation for more information.

### Data Fetching and Mutation

Data fetching is done through prisma. Mutations are done using Next.js Server Functions, skipping the Next.js 12 `/api` convention. Files are stores inside the `/data` folder, where `/data/services` are server-side data fetches and `/data/actions` are mutations. Take extra consideration when creating hidden endpoints with "use server" to avoid exposing sensitive data.

For more information, refer to the [Server Actions and Mutations](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) documentation.

When using a form with an action, the loading state is included in the `SubmitButton`-component, and the form is disabled while the action is pending. For other cases, a loading state can be passed to to submit button or other components to handle the loading state.

## Deployment

The app can be built for production using the `npm run build` command. The built files will be generated in the `.next` folder.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
