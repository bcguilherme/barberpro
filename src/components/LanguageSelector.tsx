'use client'

import { useState } from 'react'
import { useI18n, Language } from '@/hooks/useI18n'
import { Globe } from 'lucide-react'

export function LanguageSelector() {
  const { language, changeLanguage } = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  
  const languages = [
    { code: 'pt', name: 'Português' },
    { code: 'en', name: 'English' }
  ]
  
  const handleLanguageChange = (lang: Language) => {
    changeLanguage(lang)
    setIsOpen(false)
  }
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors"
      >
        <Globe className="h-4 w-4" />
        <span>{languages.find(lang => lang.code === language)?.name || 'Português'}</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg overflow-hidden z-20">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code as Language)}
                className={`w-full text-left px-4 py-2 text-sm ${
                  language === lang.code
                    ? 'bg-purple-50 text-purple-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 