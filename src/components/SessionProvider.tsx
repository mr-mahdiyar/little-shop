import { SessionProvider as AuthJsSessionProvider } from "next-auth/react";
import { type ReactNode } from "react";

export default function SessionProvider({ children }: { children: ReactNode }) {
  return <AuthJsSessionProvider>{children}</AuthJsSessionProvider>;
}
