import React from 'react'
import { cn } from '@/lib/utils'

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
}

export function Spinner({ size = 'md', className, ...props }: SpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4'
  }

  return (
    <div
      className={cn(
        'border-t-transparent rounded-full animate-spin',
        sizeClasses[size],
        'border-purple-600 dark:border-purple-400',
        className
      )}
      {...props}
    />
  )
} 