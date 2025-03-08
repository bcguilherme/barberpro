'use client'

import { createContext, useContext, useState, useEffect } from 'react'

// Tipo de usuário simplificado
export type User = {
  uid: string
  email: string
  displayName: string
  photoURL: string
  plan: string
}

// Tipo do contexto de autenticação
type AuthContextType = {
  currentUser: User | null
  logout: () => void
  isLoading: boolean
}

// Valor padrão do contexto
const defaultContext: AuthContextType = {
  currentUser: null,
  logout: () => {},
  isLoading: true
}

// Criação do contexto
const AuthContext = createContext<AuthContextType>(defaultContext)

// Hook para usar o contexto
export function useAuth() {
  return useContext(AuthContext)
}

// Provedor do contexto
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Simular carregamento
    const timer = setTimeout(() => {
      // Usuário simulado para desenvolvimento
      setCurrentUser({
        uid: 'user123',
        email: 'usuario@exemplo.com',
        displayName: 'Usuário Teste',
        photoURL: 'https://ui-avatars.com/api/?name=Usuario+Teste',
        plan: 'professional'
      })
      setIsLoading(false)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  // Função de logout
  const logout = () => {
    setCurrentUser(null)
  }

  // Não renderizar nada no servidor para evitar erros de hidratação
  if (!isClient) {
    return <>{children}</>
  }

  return (
    <AuthContext.Provider value={{ currentUser, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
} 