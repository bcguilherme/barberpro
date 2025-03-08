'use client'

import React, { createContext, useState, useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import '../i18n' // Importar a configuração do i18next

// Tipos de idiomas suportados
export type Language = 'pt' | 'pt-PT' | 'en' | 'es' | 'fr' | 'it' | 'de'

// Interface para o contexto de idioma
interface LanguageContextType {
  language: Language
  t: (key: string) => string
  changeLanguage: (lang: Language) => void
  isLoggedIn: boolean
  isLoading: boolean
}

// Valor padrão para o contexto
const defaultLanguageContext: LanguageContextType = {
  language: 'pt',
  t: (key: string) => key,
  changeLanguage: () => {},
  isLoggedIn: false,
  isLoading: true
}

// Criar o contexto
const LanguageContext = createContext<LanguageContextType>(defaultLanguageContext)

// Hook personalizado para usar o contexto
export const useLanguage = () => useContext(LanguageContext)

// Função para validar se o idioma é suportado
const isValidLanguage = (lang: string): lang is Language => {
  return lang === 'pt' || lang === 'pt-PT' || lang === 'en' || lang === 'es' || lang === 'fr' || lang === 'it' || lang === 'de'
}

// Função para obter o idioma do navegador
const getBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') return 'pt'
  
  const browserLang = navigator.language
  
  // Verificar se é português de Portugal especificamente
  if (browserLang === 'pt-PT') return 'pt-PT'
  
  // Para outros casos, usar apenas o código de idioma principal
  const mainLang = browserLang.split('-')[0]
  return isValidLanguage(mainLang) ? mainLang as Language : 'pt'
}

// Função para obter o idioma salvo
const getSavedLanguage = (): Language => {
  if (typeof window === 'undefined') return 'pt'
  
  const savedLang = localStorage.getItem('language')
  return savedLang && isValidLanguage(savedLang) ? savedLang as Language : 'pt'
}

// Provedor do contexto
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { t: translate, i18n } = useTranslation()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  // Inicializar o idioma
  useEffect(() => {
    // Verificar se o usuário está logado (simulação)
    const checkAuth = () => {
      // Aqui você implementaria a lógica real de verificação de autenticação
      const token = localStorage.getItem('auth_token')
      setIsLoggedIn(!!token)
    }
    
    // Definir o idioma com base na preferência do usuário ou navegador
    const initLanguage = () => {
      const savedLang = getSavedLanguage()
      const browserLang = getBrowserLanguage()
      
      // Prioridade: 1. Idioma salvo, 2. Idioma do navegador, 3. Português
      const detectedLang = savedLang || browserLang || 'pt'
      
      // Atualizar o idioma no i18next
      i18n.changeLanguage(detectedLang)
    }
    
    checkAuth()
    initLanguage()
    setIsLoading(false)
  }, [i18n])

  // Função para mudar o idioma
  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang)
    }
  }

  // Função para traduzir uma chave
  const t = (key: string): string => {
    return translate(key)
  }
  
  return (
    <LanguageContext.Provider value={{ 
      language: i18n.language as Language, 
      t, 
      changeLanguage, 
      isLoggedIn, 
      isLoading 
    }}>
      {children}
    </LanguageContext.Provider>
  )
} 