# DEMO STEPS

## App demo (fullscreen)

- Main page
- Joke page

## Setup

f8bfad14c3c9da662044dd5d5f83d9a4cabd8ea5

- Remix rebuild cause Remmix has a lot of good stuff
- Tailwind, prisma
- Next.js boilerplate
- Routes, layouts, pages
- Components

## Native form + server action

(Form1 + createJoke1)

35bab0bd171b35cf36b823a4cbad771fb04b2c3a

- Add new Form _component on new/page.tsx and implement basic form
- Add action prop + code action
- Code AddButton component and leave it there

Notes: progressively enhanced, calling server from client, action-prop.

## Server side validation

(createJoke2)

bfb44f93f9125cca58509ab818d28e57e5528cf3

- Show validations/schema
- Add zod validation and error feedback, messages if time
- Throw error errorboundary

Notes: unsafe submit, what is zod, runtime validation server-side.

## useActionState

(Form3 + createJoke3)

3bc875af93f0712c6333845c1b76c3cd7b2d5c26

- Use useActionState
- Add useFormStatus and modify server action
- Third argument pending state mention

Notes: progressively enhanced but client-side feedback when possible. All fields uncontrolled. Of course not only for validation. Could be anything like checking if an item is in stock and returning a message. 

## UseEffect and reset

(Form4)

4baa1c7b642cc2fe930a0b9de0c63b6b7b681ec5

- Add effect to listen for formStatus changes
- Mention auto reset react 19
- Default value
- Add toast notifications

Notes: client-side feedback but still prog.enhanched.

## Delete joke

6fa254295a47db7512286648cb3e397844576013

(DeleteJokeButton + deleteJoke)

- Code form with button
- Mention onClick hydration
- Show server action
- Code delete action using bind, mention hidden inputs
- Code a delete button? No: Let's pull in a generalized submitbutton and also add this to our createJoke

Notes: server action, client-side feedback.

## Favorite joke

86e0051963ca7ff9ab15704ef10a2146b952a923

(Favorite + favoriteJoke)

- Add component and pass joke
- Show component
- Show server action
- Optimistic update onSubmit

Notes: server action, bind, transition, client-side feedback.

## Demo form again without then with JavaScript (fullscreen)
