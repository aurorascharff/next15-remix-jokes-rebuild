import { prisma } from "@/db";
import React from "react";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

async function createTodo(data: FormData) {
  "use server";

  const name = data.get("name")?.valueOf();
  const content = data.get("content")?.valueOf();

  if (typeof name !== "string" || name.length === 0) {
    throw new Error("Invalid name");
  }

  if (typeof content !== "string" || content.length === 0) {
    throw new Error("Invalid content");
  }

  await prisma.joke.create({
    data: {
      name,
      content,
    },
  });
  redirect("/jokes");
}

export default function NewJokePage() {
  return (
    <div>
      <p>Add your own hilarious joke</p>
      <form action={createTodo}>
        <div>
          <label>
            Name:
            <input name="name" type="text" required minLength={2} />
          </label>
        </div>
        <div>
          <label>
            Content:
            <textarea name="content" required minLength={5} />
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
