"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 10 * (60 * 1000),
      cacheTime: 10 * (60 * 1000),
    },
  },
});

function RqProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
}

export default RqProvider;
