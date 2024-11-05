'use client';

import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { useActionState } from 'react';
import { jokeSchema } from '@/app/(demo)/_validations/jokeSchema';
import AddButton from '@/components/AddButton';
import { createJoke } from '../_actions/createJoke';

export default function ConformForm() {
  const [lastResult, createJokeAction] = useActionState(createJoke, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }: { formData: FormData }) {
      return parseWithZod(formData, { schema: jokeSchema });
    },
    shouldRevalidate: 'onInput',
    shouldValidate: 'onBlur',
  });

  return (
    <form {...getFormProps(form)} autoComplete="off" action={createJokeAction}>
      <label>
        Name:
        <input {...getInputProps(fields.name, { type: 'text' })} key={fields.name.key} />
        <span className="text-red">{fields.name.errors}</span>
      </label>
      <label>
        Content:
        <textarea {...getInputProps(fields.content, { type: 'text' })} key={fields.content.key} />
        <span className="text-red">{fields.content.errors}</span>
      </label>
      <div className="flex justify-end">
        <AddButton />
      </div>
    </form>
  );
}
