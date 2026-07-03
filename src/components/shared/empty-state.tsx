/**
 * Empty State
 * Component for empty state displays
 */

import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}: EmptyStateProps): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12 px-4">
      {Icon && <Icon className="w-12 h-12 text-muted-foreground/50" />}
      <div className="text-center space-y-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      {action && (
        <Button onClick={action.onClick} variant="outline" size="sm" className="mt-2">
          {action.label}
        </Button>
      )}
    </div>
  );
}
