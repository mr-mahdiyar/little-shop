import { authenticationChecking } from "@/actions/auth";
import { ComponentPropsWithoutRef } from "react";

type ProtectedContentProps = Pick<ComponentPropsWithoutRef<"section">, "children" | "className">;
export default async function ProtectedContent({ children, className }: ProtectedContentProps) {
  const isUserLoggedIn = await authenticationChecking();

  if (!!!isUserLoggedIn) return <section>You have to login for visit content.</section>;

  return <section className={className}>{children}</section>;
}
