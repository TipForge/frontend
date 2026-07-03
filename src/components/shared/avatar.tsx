/**
 * Avatar
 * User profile picture component
 */

import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface AvatarProps {
  src?: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string;
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
  xl: 'w-16 h-16 text-lg',
};

export function Avatar({ src, alt, size = 'md', fallback, className }: AvatarProps): JSX.Element {
  const initials = fallback || alt.charAt(0).toUpperCase();

  return (
    <div
      className={cn(
        `
        ${sizeClasses[size]}
        rounded-full
        overflow-hidden
        bg-gradient-to-br from-primary to-secondary
        flex items-center justify-center
        text-primary-foreground font-semibold
        flex-shrink-0
      `,
        className
      )}
    >
      {src ? <Image src={src} alt={alt} fill className="object-cover" /> : <span>{initials}</span>}
    </div>
  );
}
