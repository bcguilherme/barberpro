'use client'

import { useState, useEffect } from 'react'
import { useI18n, Language } from '@/hooks/useI18n'
import { Globe } from 'lucide-react'
import { useMediaQuery } from '@/hooks/useMediaQuery'

// Mapeamento de códigos de idioma para nomes e bandeiras
const languageMap = {
  pt: { name: 'Português (BR)', flag: '🇧🇷' },
  'pt-PT': { name: 'Português (PT)', flag: '🇵🇹' },
  en: { name: 'English', flag: '🇺🇸' },
  es: { name: 'Español', flag: '🇪🇸' },
  fr: { name: 'Français', flag: '🇫🇷' },
  it: { name: 'Italiano', flag: '🇮🇹' },
  de: { name: 'Deutsch', flag: '🇩🇪' }
}

export function LanguageSelector() {
  const { language, changeLanguage, t } = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width: 768px)')
  
  // Fechar o menu quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.language-selector')) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])
  
  const handleLanguageChange = (lang: Language) => {
    changeLanguage(lang)
    setIsOpen(false)
    
    // Forçar a atualização da página para aplicar todas as traduções
    // Isso garante que todo o site seja traduzido corretamente
    window.location.reload()
  }
  
  return (
    <div className="relative language-selector">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors rounded-md px-3 py-2 hover:bg-gray-100"
        aria-label={t('common.selectLanguage') || 'Selecionar idioma'}
        aria-expanded={isOpen}
      >
        <Globe className="h-4 w-4" />
        <span className="flex items-center">
          <span className="mr-2">{languageMap[language as keyof typeof languageMap]?.flag || languageMap.pt.flag}</span>
          {!isMobile && <span>{languageMap[language as keyof typeof languageMap]?.name || languageMap.pt.name}</span>}
        </span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-50 border border-gray-200">
          <div className="py-1">
            {Object.entries(languageMap).map(([code, { name, flag }]) => (
              <button
                key={code}
                onClick={() => handleLanguageChange(code as Language)}
                className={`w-full text-left px-4 py-2 text-sm flex items-center ${
                  language === code
                    ? 'bg-purple-50 text-purple-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                aria-selected={language === code}
              >
                <span className="mr-2 text-lg">{flag}</span>
                <span>{name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 