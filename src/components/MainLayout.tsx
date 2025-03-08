'use client'

import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { cn } from '@/lib/utils'

interface MainLayoutProps {
  children: React.ReactNode
  className?: string
  hideFooter?: boolean
  hideHeader?: boolean
  headerVariant?: 'default' | 'transparent'
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  className,
  hideFooter = false,
  hideHeader = false,
  headerVariant = 'default',
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      {!hideHeader && <Header variant={headerVariant} />}
      
      <main className={cn(
        "flex-1 w-full mx-auto",
        !hideHeader && "pt-20", // Espaço para o header fixo
        className
      )}>
        {children}
      </main>
      
      {!hideFooter && <Footer />}
    </div>
  )
}

export default MainLayout 