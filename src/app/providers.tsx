'use client'

import { useState, useEffect } from 'react'
import { LanguageProvider } from '@/context/LanguageContext'
import { AuthProvider } from '@/context/AuthContext'
import { PricingProvider } from '@/context/PricingContext'
import { Spinner } from '@/components/ui/spinner'
import '../i18n' // Importar a configuração do i18next
import { useTranslation } from 'react-i18next'

// Componente de fallback durante o carregamento
const LoadingFallback = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
    <Spinner size="lg" className="text-purple-600 dark:text-purple-400" />
    <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Carregando...</p>
  </div>
)

// Mapeamento de idiomas para códigos HTML lang
const langMap = {
  pt: 'pt-BR',
  'pt-PT': 'pt-PT',
  en: 'en-US',
  es: 'es-ES',
  fr: 'fr-FR',
  it: 'it-IT',
  de: 'de-DE'
}

// Componente para atualizar o atributo lang do HTML
const HtmlLangUpdater = () => {
  const { i18n } = useTranslation()
  
  useEffect(() => {
    const currentLang = i18n.language
    const htmlLang = langMap[currentLang as keyof typeof langMap] || 'pt-BR'
    document.documentElement.lang = htmlLang
  }, [i18n.language])
  
  return null
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Pequeno timeout para garantir que o i18next seja inicializado
    const timer = setTimeout(() => {
      setMounted(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    return <LoadingFallback />
  }

  return (
    <LanguageProvider>
      <HtmlLangUpdater />
      <AuthProvider>
        <PricingProvider>
          {children}
        </PricingProvider>
      </AuthProvider>
    </LanguageProvider>
  )
}
