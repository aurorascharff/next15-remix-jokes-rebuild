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

## Form1 + createJoke1 (native + server action)

- Add new Form _component on new/page.tsx and implement basic form
- Add submit button
- Add action prop + code action

Notes: progressively enhanced, calling server from client, action-prop.

## createJoke2 Server side validation

- Show validations/schema
- Add zod validation and error feedback

Notes: what is zod, runtime validation server-side.

## Form2 + createJoke3 (formStatus + formState)

- Add SubmitButton
- Use useFormState
- Add useFormStatus and modify server action

Notes: progressively enhanced but client-side feedback when possible All fields uncontrolled. Of course not only for validation. Could be anything like checking if an item is in stock and returning a message.

## DeleteJokeButton + deleteJoke

- Code deletejokebutton with transition, show server action
- Code delete action using bind and existing deleteButton

Notes: server action, bind, transition, client-side feedback.

## Form3 (more client-side stuff)

- Add effect to listen for formStatus changes
- Reset form after submit
- Add toast notifications

Notes: client-side feedback but still prog.enhanched.

## Form4 + createJoke4 (useOptimistic)

- Show useOptimistic hook inside a provider, show wrapped layout
- Modify jokeslist to useOptimistic
- Add onSubmit using useOptimistic, hideFormValues
- Remove button and "Adding..."
- Show form values on success, toast on server error
- Modify input fields
- Add revalidate to server action

Notes: optimistic update, feels like server isnt slow, limited because it needs to pass across layout page, really quick coding here or only show code. Prog enhc.
Visual rollback, maybe there will be support for this in the future.