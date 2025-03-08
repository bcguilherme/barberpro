'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { Sparkles } from 'lucide-react'

// Tipos de negócios que serão alternados
const businessTypes = {
  pt: ['barbearias', 'cabeleireiros', 'salões de beleza', 'estéticas', 'esmalterias'],
  en: ['barbershops', 'hair salons', 'beauty salons', 'spas', 'nail salons']
}

export function DynamicHeroTitle() {
  const { language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const types = businessTypes[language] || businessTypes.pt

  // Título base por idioma
  const titlePrefix = {
    pt: 'Sistema completo para gestão de ',
    en: 'Complete management system for '
  }

  useEffect(() => {
    // Alterna entre os tipos de negócio a cada 3 segundos
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % types.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [types.length])

  // Encontrar o tipo de negócio mais longo para garantir espaço suficiente
  const longestType = types.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ''
  )

  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center justify-center lg:justify-start">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
        <span>{titlePrefix[language]}</span>
      </h1>
      <div className="relative inline-flex h-12 md:h-16 ml-0 md:ml-2 mt-2 md:mt-0">
        <span className="invisible whitespace-nowrap text-4xl md:text-5xl lg:text-6xl font-extrabold">
          {longestType}
        </span>
        <div className="absolute inset-0 flex items-center justify-start overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="flex items-center whitespace-nowrap"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 relative">
                {types[currentIndex]}
                <motion.span 
                  className="absolute -right-6 -top-1 hidden sm:block"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <Sparkles size={16} className="text-yellow-500" />
                </motion.span>
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
} 