'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Home, Info, DollarSign, Mail, User, LogIn, LogOut, Settings, Phone, Instagram } from 'lucide-react'
import { useI18n } from '@/hooks/useI18n'
import { LanguageSelector } from './LanguageSelector'

export function MobileMenu() {
  const pathname = usePathname()
  const { t, isLoggedIn } = useI18n()
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Verificar se o link está ativo
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname?.startsWith(path)) return true
    return false
  }

  return (
    <div className="block md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      {/* Botão de menu flutuante */}
      <button 
        className="absolute -top-16 right-4 bg-purple-600 text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        {isMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Menu de navegação inferior */}
      <div className="flex justify-around items-center h-16 px-2">
        <Link 
          href="/" 
          className={`flex flex-col items-center justify-center w-1/5 ${
            isActive('/') ? 'text-purple-600' : 'text-gray-500'
          }`}
        >
          <Home className="h-5 w-5" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        
        <Link 
          href="/recursos" 
          className={`flex flex-col items-center justify-center w-1/5 ${
            isActive('/recursos') ? 'text-purple-600' : 'text-gray-500'
          }`}
        >
          <Info className="h-5 w-5" />
          <span className="text-xs mt-1">Recursos</span>
        </Link>
        
        <Link 
          href="/precos" 
          className={`flex flex-col items-center justify-center w-1/5 ${
            isActive('/precos') ? 'text-purple-600' : 'text-gray-500'
          }`}
        >
          <DollarSign className="h-5 w-5" />
          <span className="text-xs mt-1">Preços</span>
        </Link>
        
        <Link 
          href="/contato" 
          className={`flex flex-col items-center justify-center w-1/5 ${
            isActive('/contato') ? 'text-purple-600' : 'text-gray-500'
          }`}
        >
          <Phone className="h-5 w-5" />
          <span className="text-xs mt-1">Contato</span>
        </Link>
        
        {isClient && isLoggedIn ? (
          <Link 
            href="/dashboard" 
            className={`flex flex-col items-center justify-center w-1/5 ${
              isActive('/dashboard') ? 'text-purple-600' : 'text-gray-500'
            }`}
          >
            <Settings className="h-5 w-5" />
            <span className="text-xs mt-1">Painel</span>
          </Link>
        ) : (
          <Link 
            href="/login" 
            className={`flex flex-col items-center justify-center w-1/5 ${
              isActive('/login') ? 'text-purple-600' : 'text-gray-500'
            }`}
          >
            <LogIn className="h-5 w-5" />
            <span className="text-xs mt-1">Entrar</span>
          </Link>
        )}
      </div>

      {/* Menu expandido */}
      {isMenuOpen && (
        <div className="absolute bottom-16 left-0 right-0 bg-white border-t border-gray-200 shadow-lg rounded-t-xl overflow-hidden">
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Link 
                href="/como-funciona" 
                className={`flex items-center p-3 rounded-lg ${
                  isActive('/como-funciona') 
                    ? 'bg-purple-100 text-purple-600' 
                    : 'bg-gray-100 text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Info className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Como Funciona</span>
              </Link>
              
              <Link 
                href="https://instagram.com/barberpro.pt" 
                className="flex items-center p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                onClick={() => setIsMenuOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Instagram</span>
              </Link>
              
              {isClient && isLoggedIn ? (
                <>
                  <Link 
                    href="/perfil" 
                    className="flex items-center p-3 rounded-lg bg-gray-100 text-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">Perfil</span>
                  </Link>
                  
                  <Link 
                    href="/logout" 
                    className="flex items-center p-3 rounded-lg bg-red-100 text-red-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <LogOut className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">Sair</span>
                  </Link>
                </>
              ) : (
                <>
                  <Link 
                    href="/login" 
                    className="flex items-center p-3 rounded-lg bg-gray-100 text-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <LogIn className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">Entrar</span>
                  </Link>
                  
                  <Link 
                    href="/cadastro" 
                    className="flex items-center p-3 rounded-lg bg-purple-600 text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">Cadastrar</span>
                  </Link>
                </>
              )}
            </div>
            
            <div className="flex justify-between items-center border-t border-gray-200 pt-4">
              <div className="text-sm text-gray-500">
                <p>contato@barberpro.pt</p>
                <p>barberpro.pt</p>
              </div>
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 