'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useI18n } from '@/hooks/useI18n'
import { LanguageSelector } from './LanguageSelector'

interface HeaderProps {
  className?: string
  variant?: 'default' | 'transparent'
}

export const Header: React.FC<HeaderProps> = ({
  className,
  variant = 'default',
}) => {
  const pathname = usePathname()
  const { t, isLoggedIn } = useI18n()
  
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isClient, setIsClient] = React.useState(false)

  // Efeito para detectar scroll
  React.useEffect(() => {
    setIsClient(true)
    
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Verificar se o link está ativo
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname?.startsWith(path)) return true
    return false
  }

  return (
    <header
      className={cn(
        'w-full py-4 px-6 flex items-center justify-between',
        variant === 'default' ? 'bg-white shadow-sm' : 'bg-transparent',
        className
      )}
    >
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-purple-600">BARBERPRO</span>
      </Link>
      
      <nav className="hidden md:flex items-center space-x-6">
        <Link 
          href="/recursos" 
          className="text-slate-700 hover:text-purple-600 transition-colors"
        >
          Recursos
        </Link>
        <Link 
          href="/precos" 
          className="text-slate-700 hover:text-purple-600 transition-colors"
        >
          Preços
        </Link>
        <Link 
          href="/contato" 
          className="text-slate-700 hover:text-purple-600 transition-colors"
        >
          Contato
        </Link>
        <Link 
          href="/login" 
          className="px-4 py-2 rounded-md bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
        >
          Entrar
        </Link>
        <Link 
          href="/cadastro" 
          className="px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors"
        >
          Começar Agora
        </Link>
      </nav>
      
      <button className="md:hidden text-slate-700">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </header>
  )
}

export default Header 