"use client";

import { logout } from "@/actions/auth";
import useProducts from "@/hooks/useProducts";

export default function DashboardPage() {
  const { error, isError, isLoading } = useProducts();

  if (isLoading) {
    return (
      <div className="h-dvh flex items-center justify-center">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="h-dvh flex items-center justify-center">
        <h1>{error?.message}</h1>
      </div>
    );
  }
  return (
    <div className="flex max-w-72 mx-auto justify-between mt-10 items-center">
      <h1>Here is dashboard page.</h1>
      <form
        action={async () => {
          await logout();
        }}
      >
        <button className="bg-red-500 text-white p-0.5 rounded-md hover:bg-red-400 cursor-pointer">logout</button>
      </form>
    </div>
  );
}
