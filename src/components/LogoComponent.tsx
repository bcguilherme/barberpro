import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import '@/styles/logo.css';

interface LogoProps {
  variant?: 'default' | 'small' | 'text-only' | 'instagram';
  className?: string;
  width?: number;
  height?: number;
  animated?: boolean;
  responsive?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'default',
  className,
  width,
  height,
  animated = false,
  responsive = false,
}) => {
  const getLogoSrc = () => {
    switch (variant) {
      case 'small':
        return '/logo-new-small.png';
      case 'text-only':
        return '/logo-new-text.png';
      case 'instagram':
        return '/logo-instagram.png';
      default:
        return '/logo-new.png';
    }
  };

  const getDefaultDimensions = () => {
    switch (variant) {
      case 'small':
        return { width: 50, height: 50 };
      case 'text-only':
        return { width: 150, height: 40 };
      case 'instagram':
        return { width: 500, height: 500 };
      default:
        return { width: 200, height: 80 };
    }
  };

  const defaultDimensions = getDefaultDimensions();
  const logoWidth = width || defaultDimensions.width;
  const logoHeight = height || defaultDimensions.height;

  return (
    <div 
      className={cn(
        'logo-container', 
        animated && 'logo-animated',
        responsive && 'responsive',
        className
      )}
    >
      <Image
        src={getLogoSrc()}
        alt="BarberPro Logo"
        width={logoWidth}
        height={logoHeight}
        priority
        className="logo-image object-contain"
      />
    </div>
  );
};

export const LogoText: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <h1 className={cn('logo-text text-xl font-bold', className)}>
      BARBER<span>PRO</span>
    </h1>
  );
};

export default Logo;