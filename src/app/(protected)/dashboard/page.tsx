"use client";

import { logout } from "@/actions/auth";
import useProducts from "@/hooks/useProducts";
import useUser from "@/hooks/useUser";
import Loading from "@/components/Loading";

export default function DashboardPage() {
  const { error, isError: isProductsError, isLoading: isProductsLoading } = useProducts();
  const { isLoading: isUserDataLoading, userData } = useUser();

  if (isProductsLoading) {
    return (
      <div className="h-dvh flex items-center justify-center">
        <Loading />
      </div>
    );
  }
  if (isProductsError) {
    return (
      <div className="h-dvh flex items-center justify-center">
        <h1>{error?.message}</h1>
      </div>
    );
  }
  return (
    <div className="flex max-w-72 mx-auto justify-between mt-10 items-center">
      {isUserDataLoading ? <Loading /> : <h1>Welcome {userData?.name}</h1>}
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
