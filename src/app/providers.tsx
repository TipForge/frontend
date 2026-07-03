'use client';

import { ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { TipForgeProvider } from 'tipforge-sdk/react';

const queryClient = new QueryClient();

export function Providers({ children }: { children: ReactNode }): JSX.Element {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

  return (
    <QueryClientProvider client={queryClient}>
      <TipForgeProvider baseUrl={apiUrl}>{children}</TipForgeProvider>
    </QueryClientProvider>
  );
}
