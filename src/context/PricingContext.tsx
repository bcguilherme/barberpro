'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// Definição de tipos
type CountryCode = string
type CountryData = {
  discount: number // Porcentagem de desconto (positivo) ou aumento (negativo)
  currencySymbol: string
  currencyCode: string
  exchangeRate: number // Taxa de câmbio em relação ao BRL
}

// Mapeamento de países com seus respectivos descontos/aumentos e símbolos de moeda
const COUNTRY_DATA: Record<CountryCode, CountryData> = {
  'BR': { 
    discount: 0, 
    currencySymbol: 'R$', 
    currencyCode: 'BRL',
    exchangeRate: 1 
  },
  'US': { 
    discount: -20, // 20% mais caro nos EUA
    currencySymbol: '$', 
    currencyCode: 'USD',
    exchangeRate: 0.2 // 1 BRL = 0.2 USD (exemplo)
  },
  'PT': { 
    discount: 10, // 10% mais barato em Portugal
    currencySymbol: '€', 
    currencyCode: 'EUR',
    exchangeRate: 0.18 // 1 BRL = 0.18 EUR (exemplo)
  },
  'ES': { 
    discount: 5, // 5% mais barato na Espanha
    currencySymbol: '€', 
    currencyCode: 'EUR',
    exchangeRate: 0.18 // 1 BRL = 0.18 EUR (exemplo)
  },
  'MX': { 
    discount: 15, // 15% mais barato no México
    currencySymbol: '$', 
    currencyCode: 'MXN',
    exchangeRate: 3.5 // 1 BRL = 3.5 MXN (exemplo)
  },
  'AR': { 
    discount: 30, // 30% mais barato na Argentina
    currencySymbol: '$', 
    currencyCode: 'ARS',
    exchangeRate: 90 // 1 BRL = 90 ARS (exemplo)
  },
  'CO': { 
    discount: 20, // 20% mais barato na Colômbia
    currencySymbol: '$', 
    currencyCode: 'COP',
    exchangeRate: 800 // 1 BRL = 800 COP (exemplo)
  }
}

// Valor padrão para países não mapeados
const DEFAULT_COUNTRY_DATA: CountryData = {
  discount: 0,
  currencySymbol: 'R$',
  currencyCode: 'BRL',
  exchangeRate: 1
}

// Interface do contexto
interface PricingContextType {
  countryCode: CountryCode
  discount: number
  currencySymbol: string
  currencyCode: string
  exchangeRate: number
  formatPrice: (priceInBRL: number) => string
  isLoading: boolean
}

// Criação do contexto
const PricingContext = createContext<PricingContextType | undefined>(undefined)

// Hook para usar o contexto
export function usePricing() {
  const context = useContext(PricingContext)
  if (context === undefined) {
    throw new Error('usePricing must be used within a PricingProvider')
  }
  return context
}

// Provider
interface PricingProviderProps {
  children: ReactNode
}

export function PricingProvider({ children }: PricingProviderProps) {
  const [countryCode, setCountryCode] = useState<CountryCode>('BR')
  const [isLoading, setIsLoading] = useState(true)
  
  // Dados do país atual
  const countryData = COUNTRY_DATA[countryCode] || DEFAULT_COUNTRY_DATA
  
  // Função para formatar preço na moeda local
  const formatPrice = (priceInBRL: number): string => {
    // Aplicar desconto/aumento e converter para moeda local
    const priceWithDiscount = priceInBRL * (1 - countryData.discount / 100)
    const priceInLocalCurrency = priceWithDiscount * countryData.exchangeRate
    
    // Formatar o preço de acordo com a moeda
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: countryData.currencyCode,
      currencyDisplay: 'symbol',
    }).format(priceInLocalCurrency)
  }
  
  // Detectar país do usuário
  useEffect(() => {
    const detectCountry = async () => {
      try {
        // Tentar obter a localização do usuário via API de geolocalização
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        
        // Verificar se o país está em nossa lista
        if (data.country_code && COUNTRY_DATA[data.country_code]) {
          setCountryCode(data.country_code)
        }
      } catch (error) {
        console.error('Erro ao detectar país:', error)
        // Manter o país padrão (BR) em caso de erro
      } finally {
        setIsLoading(false)
      }
    }
    
    detectCountry()
  }, [])
  
  const value = {
    countryCode,
    discount: countryData.discount,
    currencySymbol: countryData.currencySymbol,
    currencyCode: countryData.currencyCode,
    exchangeRate: countryData.exchangeRate,
    formatPrice,
    isLoading
  }
  
  return (
    <PricingContext.Provider value={value}>
      {children}
    </PricingContext.Provider>
  )
} 