/**
 * Auth Form
 * Base authentication form component
 */

'use client';

import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export interface AuthFormProps {
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function AuthForm({ title, description, children, footer }: AuthFormProps): JSX.Element {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5 py-12 px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl">{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>

        <CardContent className="space-y-6">
          {children}

          {footer && <div className="text-center text-sm text-muted-foreground">{footer}</div>}
        </CardContent>
      </Card>
    </div>
  );
}
