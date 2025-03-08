import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'premium' | 'premium-dark';
  hover?: boolean;
  bordered?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  hover = false,
  bordered = false,
}) => {
  const baseStyles = 'rounded-lg overflow-hidden';
  
  const variantStyles = {
    default: 'bg-white shadow-md',
    premium: 'bg-gradient-to-br from-white to-barber-accent-light/10 shadow-lg',
    'premium-dark': 'bg-gradient-to-br from-barber-purple-dark to-barber-purple-medium shadow-xl'
  };
  
  const hoverStyles = hover ? 'transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]' : '';
  
  const borderStyles = bordered 
    ? variant === 'premium' 
      ? 'border border-barber-accent/30' 
      : variant === 'premium-dark' 
        ? 'border border-barber-accent/20' 
        : 'border border-gray-200'
    : '';
  
  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        hoverStyles,
        borderStyles,
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={cn('p-6 border-b', className)}>{children}</div>;
};

export const CardTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <h3 className={cn('text-xl font-semibold', className)}>{children}</h3>;
};

export const CardDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <p className={cn('text-sm text-gray-500 mt-1', className)}>{children}</p>;
};

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={cn('p-6', className)}>{children}</div>;
};

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={cn('p-6 border-t bg-gray-50/50', className)}>{children}</div>;
};

export default Card; 