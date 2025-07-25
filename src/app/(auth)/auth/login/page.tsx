"use client";
import { login } from "@/actions/auth";
import Loading from "@/components/Loading";
import React, { FormEvent, useState } from "react";

export default function LoginPage() {
  
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      setIsLoading(true);
      await login({ email, password });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <section className="flex items-center justify-center h-dvh">
      <form onSubmit={submitHandler} className="w-72 p-4 rounded-md bg-blue-400 flex flex-col gap-y-8">
        <section className="w-full">
          <label htmlFor="email">email</label>
          <input type="text" name="email" className="border outline-none p-1 rounded-md w-full mt-1.5 bg-white" />
        </section>
        <section className="w-full">
          <label htmlFor="password">password</label>
          <input type="text" name="password" className="border outline-none p-1 rounded-md w-full mt-1.5 bg-white" />
        </section>
        <button
          className={`bg-yellow-200 ${isLoading && "bg-yellow-300"} p-1 rounded-md hover:bg-yellow-300 cursor-pointer `}
          disabled={isLoading}
        >
          {isLoading ? <Loading className="py-3 mx-auto scale-50" /> : "confirm"}
          {/* confirm */}
        </button>
      </form>
    </section>
  );
}
