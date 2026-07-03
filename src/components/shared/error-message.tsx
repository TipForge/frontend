/**
 * Error Message
 * Display error states
 */

import { AlertCircle } from 'lucide-react';

export interface ErrorMessageProps {
  title?: string;
  message: string;
  onDismiss?: () => void;
}

export function ErrorMessage({ title, message, onDismiss }: ErrorMessageProps): JSX.Element {
  return (
    <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-4 flex gap-3">
      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        {title && <p className="font-medium text-destructive">{title}</p>}
        <p className="text-sm text-destructive/80">{message}</p>
      </div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="text-destructive/60 hover:text-destructive flex-shrink-0"
        >
          ✕
        </button>
      )}
    </div>
  );
}
