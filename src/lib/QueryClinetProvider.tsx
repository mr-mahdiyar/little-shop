"use client";

import { QueryClient, QueryClientProvider as ReactQueryClientProvider } from "@tanstack/react-query";
import { type ReactNode } from "react";

export default function QueryClientProvider({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();

  return <ReactQueryClientProvider client={queryClient}>{children}</ReactQueryClientProvider>;
}
