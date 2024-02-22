# DEMO STEPS

## App demo

- Main page
- Joke page
- (Delete joke)

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

Notes: progressively enhanced but client-side feedback when possible

## Form3 (more client-side stuff)

- Add effect to listen for formStatus changes
- Reset form after submit
- Add toast notifications

Notes: client-side feedback but still prog.enhanched

## Form4 (save draft)

- Add useTransition
- Add onChange activeJoke
- Show existing fake server actions
- Pass draft from server
- Add onBlur saveDraft
- Add saveDraft function with transition
- Update useEffect to clear draft on submit

Notes: client-side only functionality
