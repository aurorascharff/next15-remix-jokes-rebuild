# DEMO STEPS

## App demo

- Main page
- Joke page

## Setup

- Remix rebuild
- Tailwind, prisma
- Next.js boilerplate
- Routes, layouts, pages
- Components

## Native form + server action

(Form1 + createJoke1)

- Add new Form _component on new/page.tsx and implement basic form
- Add submit button
- Add action prop + code action

Notes: progressively enhanced, calling server from client, action-prop.

## Server side validation

(createJoke2)

- Show validations/schema
- Add zod validation and error feedback

Notes: what is zod, runtime validation server-side.

## FormStatus + formState

(Form2 + createJoke3)

- Add SubmitButton
- Use useFormState
- Add useFormStatus and modify server action

Notes: progressively enhanced but client-side feedback when possible All fields uncontrolled. Of course not only for validation. Could be anything like checking if an item is in stock and returning a message.

## UseEffect and reset

(Form3)

- Add effect to listen for formStatus changes
- Reset form after submit
- Add toast notifications

Notes: client-side feedback but still prog.enhanched. Can add noscript just for fun.

## Delete joke

(DeleteJokeButton + deleteJoke)

- Code component (maybe make a starter)
- Code delete action using bind
- Code server action
- Optimistic update onSubmit

Notes: server action, bind, transition, client-side feedback.

## Favorite joke

(Favorite + favoriteJoke)

- Add component and pass joke
- Show component
- Show server action
- Optimistic update onSubmit

Notes: server action, bind, transition, client-side feedback.

## Demo form again with and without JavaScript

Notes: full screen.
