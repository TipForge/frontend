/**
 * Protected App Layout
 * Layout for authenticated routes
 */

import { ReactNode } from 'react';
import { ProtectedRoute } from '@/components/protected-route';

export default function AppLayout({ children }: { children: ReactNode }): JSX.Element {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
