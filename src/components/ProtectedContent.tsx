import { authenticationChecking } from "@/actions/auth";
import { type ReactNode } from "react";

export default async function ProtectedContent({ children }: { children: ReactNode }) {
  const isUserLoggedIn = await authenticationChecking();

  if (!!!isUserLoggedIn) return <section>برای مشاهده این قسمت باید وارد شوید.</section>;

  return <section>{children}</section>;
}
