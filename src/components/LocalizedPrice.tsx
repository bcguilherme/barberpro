'use client'

import { usePricing } from '@/context/PricingContext'
import { Skeleton } from '@/components/ui/skeleton'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '@/hooks/useI18n'

interface LocalizedPriceProps {
  priceInBRL: number
  showDiscount?: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function LocalizedPrice({ 
  priceInBRL, 
  showDiscount = false, 
  className = '',
  size = 'md'
}: LocalizedPriceProps) {
  const { t, language } = useI18n()
  const { isLoading } = usePricing()
  const [formattedPrice, setFormattedPrice] = useState<string>('')
  const [visible, setVisible] = useState(false)
  
  // Definir classes com base no tamanho
  const sizeClasses = {
    sm: 'text-lg font-semibold',
    md: 'text-2xl font-bold',
    lg: 'text-4xl font-extrabold'
  }
  
  // Formatar o preço com base no idioma
  const formatPriceByLanguage = (price: number, isAnnual: boolean = false): string => {
    if (isAnnual) {
      // Preço anual com desconto de 20%
      const annualPrice = price * 12 * 0.8;
      return language === 'en' 
        ? `€${annualPrice.toFixed(2).replace('.', ',')}`
        : `R$ ${annualPrice.toFixed(2).replace('.', ',')}`;
    }
    
    return language === 'en' 
      ? `€${price.toFixed(2).replace('.', ',')}`
      : `R$ ${price.toFixed(2).replace('.', ',')}`;
  }
  
  // Atualizar o preço formatado
  useEffect(() => {
    if (!isLoading) {
      setFormattedPrice(formatPriceByLanguage(priceInBRL));
      
      // Pequeno atraso para a animação
      const timer = setTimeout(() => {
        setVisible(true)
      }, 100)
      
      return () => clearTimeout(timer)
    }
  }, [isLoading, priceInBRL, language])
  
  // Exibir um skeleton enquanto carrega
  if (isLoading) {
    return (
      <div className={`inline-flex items-baseline ${className}`}>
        <Skeleton className={`h-8 w-24 ${size === 'lg' ? 'h-10 w-32' : size === 'sm' ? 'h-6 w-20' : ''}`} />
      </div>
    )
  }
  
  return (
    <motion.span
      className={`inline-flex items-baseline ${sizeClasses[size]} ${className}`}
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 5 }}
      transition={{ duration: 0.3 }}
    >
      {formattedPrice}
    </motion.span>
  )
} 