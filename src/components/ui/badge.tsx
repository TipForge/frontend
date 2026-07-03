/**
 * Badge Component
 * Small label component
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-smooth',
  {
    variants: {
      variant: {
        default: 'border border-primary/20 bg-primary/10 text-primary',
        secondary: 'border border-secondary/20 bg-secondary/10 text-secondary',
        destructive: 'border border-destructive/20 bg-destructive/10 text-destructive',
        outline: 'border border-border text-foreground',
        success: 'border border-success/20 bg-success/10 text-success',
        warning: 'border border-warning/20 bg-warning/10 text-warning',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps): JSX.Element {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
