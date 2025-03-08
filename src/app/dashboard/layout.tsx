'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useAuth } from './auth-context'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Calendar,
  DollarSign,
  Users,
  BarChart,
  Settings,
  Menu,
  X,
  LogOut,
  Home,
  ThumbsUp
} from 'lucide-react'

const menuItems = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: Home
  },
  {
    name: 'Agendamentos',
    href: '/dashboard/agendamentos',
    icon: Calendar
  },
  {
    name: 'Financeiro',
    href: '/dashboard/financeiro',
    icon: DollarSign
  },
  {
    name: 'Clientes',
    href: '/dashboard/clientes',
    icon: Users
  },
  {
    name: 'Relatórios',
    href: '/dashboard/relatorios',
    icon: BarChart
  },
  {
    name: 'Google Booster Review',
    href: '/dashboard/google-booster',
    icon: ThumbsUp,
    highlight: true
  },
  {
    name: 'Configurações',
    href: '/dashboard/configuracoes',
    icon: Settings
  }
]

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { currentUser, isLoading, logout } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const [isClient, setIsClient] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    // Verificar autenticação quando não estiver carregando
    if (!isLoading && isClient) {
      if (!currentUser) {
        router.push('/login')
      }
    }
  }, [currentUser, isLoading, router, isClient])

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  // Mostrar um estado de carregamento enquanto verifica a autenticação
  if (isLoading || !isClient || !currentUser) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-purple-600"></div>
        <p className="mt-4 text-gray-600">Carregando...</p>
      </div>
    )
  }

  // Renderiza o conteúdo do dashboard se o usuário estiver autenticado
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-white shadow-md hidden md:block">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-purple-600">BarberPro</h1>
        </div>
        <nav className="mt-6 px-3">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-2.5 rounded-lg font-medium transition-colors ${
                      item.highlight 
                        ? 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100 group' 
                        : isActive
                          ? 'bg-purple-50 text-purple-600'
                          : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className={`h-5 w-5 mr-3 ${
                      item.highlight 
                        ? 'text-yellow-600 group-hover:text-yellow-700' 
                        : isActive 
                          ? 'text-purple-600' 
                          : 'text-gray-500'
                    }`} />
                    {item.name}
                    {item.highlight && (
                      <span className="ml-auto inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                        Novo
                      </span>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <button
            onClick={handleLogout}
            className="flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <LogOut className="h-5 w-5 mr-3 text-gray-500" />
            Sair
          </button>
        </div>
      </aside>

      {/* Mobile menu button */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-white shadow-sm md:hidden">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold text-purple-600">BarberPro</h1>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-20 bg-white md:hidden pt-16">
          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center px-4 py-2.5 rounded-lg font-medium transition-colors ${
                        item.highlight 
                          ? 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100 group' 
                          : isActive
                            ? 'bg-purple-50 text-purple-600'
                            : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <item.icon className={`h-5 w-5 mr-3 ${
                        item.highlight 
                          ? 'text-yellow-600 group-hover:text-yellow-700' 
                          : isActive 
                            ? 'text-purple-600' 
                            : 'text-gray-500'
                      }`} />
                      {item.name}
                      {item.highlight && (
                        <span className="ml-auto inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                          Novo
                        </span>
                      )}
                    </Link>
                  </li>
                )
              })}
              <li>
                <button
                  onClick={handleLogout}
                  className="flex w-full items-center px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  <LogOut className="h-5 w-5 mr-3 text-gray-500" />
                  Sair
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 md:ml-64 p-6 pt-20 md:pt-6">
        {children}
      </main>
    </div>
  )
} 