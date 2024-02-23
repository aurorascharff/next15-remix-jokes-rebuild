# DEMO STEPS

## App demo

- Main page
- Joke page
- Delete joke

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

Notes: progressively enhanced, calling server from client, action-prop

## createJoke2 Server side validation

- Show validations/schema
- Add zod validation and error feedback

Notes: what is zod, runtime validation server-side

## Form2 + createJoke3 (formStatus + formState)

- Add SubmitButton
- Use useFormState
- Add useFormStatus and modify server action
- Show delete joke

Notes: progressively enhanced but client-side feedback when possible, actually the delete is also a form and prog-enh

## Form3 (more client-side stuff)

- Add effect to listen for formStatus changes
- Reset form after submit
- Add toast notifications

Notes: client-side feedback but still prog.enhanched

## Form4 (save draft)

- Add useTransition
- Add onChange activeJoke
- Show existing fake server actions
- Pass draft from server (name, content only)
- Add onBlur saveDraft to form
- Add saveDraft function with transition
- Update useEffect to clear draft on submit

Notes: client-side only functionality, not sure the punchline, prog.enh

## Form5 + createJoke4 (react hook form)

- Replace useFormState with react-hook-form
- Add registers and onSubmit
- Modify error messages
- Modify server action to return message
- Use normal button and add react hook form state
- Write onSubmit

Notes: lets say you dont care about prog.enh, really quick coding here or only show code

## Form6 (useOptimistic)

- Add useOptimistic hook inside a provider
- Wrap layout with provider
- Modify createJoke to use setOptimistic
- Modify jokeslist to useOptimistic
- Modify onSubmit to instantly clear etc.
- Remove "Adding..."
- Add revalidate to server action and show only error toast

Notes: optimistic update, feels like server isnt slow, limited because it needs to pass across layout page, really quick coding here or only show code, provider in forms-demo-starter
