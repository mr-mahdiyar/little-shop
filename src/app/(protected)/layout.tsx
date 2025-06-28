import SessionProvider from "@/components/SessionProvider";
import { type ReactNode } from "react";
export default function ProtectedRootsLayout({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
