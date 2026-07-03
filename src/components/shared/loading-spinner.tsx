/**
 * Loading Spinner
 * Animated loading indicator
 */

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4 border-2',
  md: 'w-8 h-8 border-2',
  lg: 'w-12 h-12 border-3',
};

export function LoadingSpinner({ size = 'md', message }: LoadingSpinnerProps): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className={`
          ${sizeClasses[size]}
          border-primary border-t-transparent
          rounded-full
          animate-spin
        `}
      />
      {message && <p className="text-sm text-muted-foreground">{message}</p>}
    </div>
  );
}
