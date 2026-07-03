/**
 * Protected Route Wrapper
 * Ensures only authenticated users can access routes
 */

'use client';

import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/auth-store';
import { LoadingSpinner } from '@/components/shared/loading-spinner';

export interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: 'fan' | 'creator' | 'admin';
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps): JSX.Element {
  const router = useRouter();
  const { isAuthenticated, user, isLoading } = useAuthStore();

  useEffect(() => {
    if (isLoading) return;

    if (!isAuthenticated) {
      router.push('/auth/signin');
      return;
    }

    if (requiredRole && user?.role !== requiredRole) {
      router.push('/unauthorized');
      return;
    }
  }, [isAuthenticated, isLoading, user, requiredRole, router]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingSpinner message="Loading..." />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingSpinner message="Redirecting..." />
      </div>
    );
  }

  if (requiredRole && user?.role !== requiredRole) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingSpinner message="Checking permissions..." />
      </div>
    );
  }

  return <>{children}</>;
}
