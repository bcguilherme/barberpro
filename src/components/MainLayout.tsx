'use client'

import Header from './Header'
import { MobileMenu } from './MobileMenu'
import { Footer } from './Footer'

interface MainLayoutProps {
  children: React.ReactNode
  showFooter?: boolean
}

export function MainLayout({ children, showFooter = true }: MainLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <MobileMenu />
      {showFooter && <Footer />}
    </>
  )
} 