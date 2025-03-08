'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useI18n } from '@/hooks/useI18n'
import { LanguageSelector } from './LanguageSelector'
import { useMediaQuery } from '@/hooks/useMediaQuery'

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
  const isMobile = useMediaQuery('(max-width: 768px)')
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Efeito para detectar scroll
  useEffect(() => {
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

  // Fechar o menu quando mudar de página
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Verificar se o link está ativo
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname?.startsWith(path)) return true
    return false
  }

  // Impedir o scroll quando o menu mobile estiver aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full py-4 px-4 md:px-6 flex items-center justify-between transition-all duration-300',
        isScrolled || isMenuOpen || variant === 'default' 
          ? 'bg-white shadow-sm' 
          : 'bg-transparent',
        className
      )}
    >
      <Link href="/" className="flex items-center space-x-2 z-10">
        <span className="text-xl md:text-2xl font-bold text-purple-600">BARBERPRO</span>
      </Link>
      
      {/* Menu Desktop */}
      <nav className="hidden md:flex items-center space-x-6">
        <Link 
          href="/recursos" 
          className={cn(
            "text-slate-700 hover:text-purple-600 transition-colors",
            isActive('/recursos') && "text-purple-600 font-medium"
          )}
        >
          {t('common.features')}
        </Link>
        <Link 
          href="/precos" 
          className={cn(
            "text-slate-700 hover:text-purple-600 transition-colors",
            isActive('/precos') && "text-purple-600 font-medium"
          )}
        >
          {t('common.pricing')}
        </Link>
        <Link 
          href="/contato" 
          className={cn(
            "text-slate-700 hover:text-purple-600 transition-colors",
            isActive('/contato') && "text-purple-600 font-medium"
          )}
        >
          {t('common.contact')}
        </Link>
        
        <LanguageSelector />
        
        {isLoggedIn ? (
          <Link 
            href="/dashboard" 
            className="px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors"
          >
            {t('common.dashboard')}
          </Link>
        ) : (
          <>
            <Link 
              href="/login" 
              className="px-4 py-2 rounded-md bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
            >
              {t('common.login')}
            </Link>
            <Link 
              href="/cadastro" 
              className="px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              {t('common.getStarted')}
            </Link>
          </>
        )}
      </nav>
      
      {/* Menu Mobile Toggle */}
      <div className="flex items-center space-x-4 md:hidden">
        <LanguageSelector />
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-slate-700 focus:outline-none"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 px-6 flex flex-col md:hidden">
          <nav className="flex flex-col space-y-6 mt-8">
            <Link 
              href="/recursos" 
              className={cn(
                "text-lg text-slate-700 hover:text-purple-600 transition-colors",
                isActive('/recursos') && "text-purple-600 font-medium"
              )}
            >
              {t('common.features')}
            </Link>
            <Link 
              href="/precos" 
              className={cn(
                "text-lg text-slate-700 hover:text-purple-600 transition-colors",
                isActive('/precos') && "text-purple-600 font-medium"
              )}
            >
              {t('common.pricing')}
            </Link>
            <Link 
              href="/contato" 
              className={cn(
                "text-lg text-slate-700 hover:text-purple-600 transition-colors",
                isActive('/contato') && "text-purple-600 font-medium"
              )}
            >
              {t('common.contact')}
            </Link>
            
            <div className="pt-4 border-t border-gray-200">
              {isLoggedIn ? (
                <Link 
                  href="/dashboard" 
                  className="w-full py-3 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors flex items-center justify-center"
                >
                  {t('common.dashboard')}
                </Link>
              ) : (
                <div className="flex flex-col space-y-4">
                  <Link 
                    href="/login" 
                    className="w-full py-3 rounded-md bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors flex items-center justify-center"
                  >
                    {t('common.login')}
                  </Link>
                  <Link 
                    href="/cadastro" 
                    className="w-full py-3 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors flex items-center justify-center"
                  >
                    {t('common.getStarted')}
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header 