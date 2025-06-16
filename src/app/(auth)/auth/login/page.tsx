"use client";
import { login } from "@/actions/auth";
import React, { FormEvent } from "react";

export default function page() {
  async function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    await login({ username, password });
  }
  return (
    <section className="flex items-center justify-center h-dvh">
      <form onSubmit={submitHandler} className="w-72 p-4 rounded-md bg-blue-400 flex flex-col gap-y-8">
        <section className="w-full">
          <label htmlFor="username">username</label>
          <input type="text" name="username" className="border outline-none p-1 rounded-md w-full mt-1.5" />
        </section>
        <section className="w-full">
          <label htmlFor="password">password</label>
          <input type="text" name="password" className="border outline-none p-1 rounded-md w-full mt-1.5" />
        </section>
        <button className="bg-yellow-200 p-1 rounded-md hover:bg-yellow-300 cursor-pointer">confirm</button>
      </form>
    </section>
  );
}
