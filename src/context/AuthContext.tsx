'use client'

import React, { createContext, useState, useContext, useEffect } from 'react'
import { useLanguage } from './LanguageContext'

// Interface para o usuário
interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user'
}

// Interface para o contexto de autenticação
interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  loginWithGoogle: () => Promise<boolean>
  logout: () => void
  register: (name: string, email: string, password: string) => Promise<boolean>
}

// Valor padrão para o contexto
const defaultAuthContext: AuthContextType = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => false,
  loginWithGoogle: async () => false,
  logout: () => {},
  register: async () => false
}

// Criar o contexto
const AuthContext = createContext<AuthContextType>(defaultAuthContext)

// Hook personalizado para usar o contexto
export const useAuth = () => useContext(AuthContext)

// Provedor do contexto
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { t } = useLanguage()

  // Verificar se o usuário está autenticado
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Simulação de verificação de autenticação
        const token = localStorage.getItem('auth_token')
        
        if (token) {
          // Em uma aplicação real, você faria uma requisição para validar o token
          // e obter os dados do usuário
          const userData = JSON.parse(localStorage.getItem('user_data') || '{}')
          
          if (userData.id) {
            setUser(userData as User)
          } else {
            localStorage.removeItem('auth_token')
            localStorage.removeItem('user_data')
          }
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error)
        localStorage.removeItem('auth_token')
        localStorage.removeItem('user_data')
      } finally {
        setIsLoading(false)
      }
    }
    
    checkAuth()
  }, [])

  // Função para fazer login
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true)
      
      // Simulação de requisição de login
      // Em uma aplicação real, você faria uma requisição para a API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Simulação de sucesso (em produção, isso viria da API)
      if (email && password) {
        const userData: User = {
          id: '1',
          name: email.split('@')[0],
          email,
          role: 'user'
        }
        
        localStorage.setItem('auth_token', 'fake_token_' + Date.now())
        localStorage.setItem('user_data', JSON.stringify(userData))
        
        setUser(userData)
        return true
      }
      
      return false
    } catch (error) {
      console.error('Erro ao fazer login:', error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  // Função para fazer login com Google
  const loginWithGoogle = async (): Promise<boolean> => {
    try {
      setIsLoading(true)
      
      // Simulação de requisição de login com Google
      // Em uma aplicação real, você usaria Firebase Auth ou outra solução
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Simulação de sucesso (em produção, isso viria do provedor OAuth)
      const userData: User = {
        id: '2',
        name: 'Usuário Google',
        email: 'usuario@gmail.com',
        role: 'user'
      }
      
      localStorage.setItem('auth_token', 'fake_google_token_' + Date.now())
      localStorage.setItem('user_data', JSON.stringify(userData))
      
      setUser(userData)
      return true
    } catch (error) {
      console.error('Erro ao fazer login com Google:', error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  // Função para fazer logout
  const logout = () => {
    localStorage.removeItem('auth_token')
    localStorage.removeItem('user_data')
    setUser(null)
  }

  // Função para registrar um novo usuário
  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true)
      
      // Simulação de requisição de registro
      // Em uma aplicação real, você faria uma requisição para a API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Simulação de sucesso (em produção, isso viria da API)
      if (name && email && password) {
        const userData: User = {
          id: '3',
          name,
          email,
          role: 'user'
        }
        
        localStorage.setItem('auth_token', 'fake_token_' + Date.now())
        localStorage.setItem('user_data', JSON.stringify(userData))
        
        setUser(userData)
        return true
      }
      
      return false
    } catch (error) {
      console.error('Erro ao registrar:', error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        loginWithGoogle,
        logout,
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  )
} 