import { signOut } from "@/auth";

export default function page() {
  return (
    <div className="flex max-w-72 mx-auto justify-between mt-10 items-center">
      <h1>Here is dashboard page.</h1>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/auth/login" });
        }}
      >
        <button className="bg-red-500 text-white p-0.5 rounded-md hover:bg-red-400 cursor-pointer">logout</button>
      </form>
    </div>
  );
}
