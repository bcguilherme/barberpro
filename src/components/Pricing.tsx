'use client'

import { useI18n } from '@/hooks/useI18n'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useState } from 'react'

// Preços base em EUR
const BASIC_PRICE_MONTHLY = 29.90
const PREMIUM_PRICE_MONTHLY = 49.90

export function Pricing() {
  const { t } = useI18n()
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')
  
  // Calcular preço anual com desconto de 20%
  const calculateAnnualPrice = (monthlyPrice: number): number => {
    return monthlyPrice * 12 * 0.8; // 20% de desconto
  }
  
  const basicAnnualPrice = calculateAnnualPrice(BASIC_PRICE_MONTHLY)
  const premiumAnnualPrice = calculateAnnualPrice(PREMIUM_PRICE_MONTHLY)
  
  // Formatar preço em euros
  const formatEuroPrice = (price: number): string => {
    return `€${price.toFixed(2).replace('.', ',')}`;
  }
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t('pricing.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {t('pricing.subtitle')}
          </motion.p>
          
          {/* Seletor de período de cobrança */}
          <div className="mt-8 inline-flex items-center bg-white p-1 rounded-full border border-gray-200 shadow-sm">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                billingPeriod === 'monthly'
                  ? 'bg-purple-800 text-white'
                  : 'text-gray-700 hover:text-purple-800'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                billingPeriod === 'annual'
                  ? 'bg-purple-800 text-white'
                  : 'text-gray-700 hover:text-purple-800'
              }`}
            >
              Anual <span className="text-xs font-normal">(-20%)</span>
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Plano Básico */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('pricing.basic.title')}</h3>
              <p className="text-gray-600 mb-6">{t('pricing.basic.description')}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-extrabold">
                  {billingPeriod === 'monthly' 
                    ? formatEuroPrice(BASIC_PRICE_MONTHLY)
                    : formatEuroPrice(basicAnnualPrice)
                  }
                </span>
                <span className="text-gray-500 ml-1">
                  {billingPeriod === 'monthly' ? t('pricing.basic.period') : t('pricing.basic.annual_period')}
                </span>
              </div>
              
              {billingPeriod === 'annual' && (
                <div className="mb-6 text-sm text-purple-800 bg-purple-50 px-4 py-2 rounded-lg">
                  {t('pricing.basic.annual_discount')}
                </div>
              )}
              
              <button className="w-full bg-purple-800 hover:bg-purple-900 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                {t('pricing.basic.cta')}
              </button>
            </div>
            
            <div className="bg-gray-50 p-8">
              <h4 className="font-medium text-gray-900 mb-4">O que está incluído:</h4>
              <ul className="space-y-3">
                <li className="flex">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{t('pricing.basic.feature1')}</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{t('pricing.basic.feature2')}</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{t('pricing.basic.feature3')}</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{t('pricing.basic.feature4')}</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Plano Premium */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-purple-200 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 bg-purple-800 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              {t('pricing.premium.badge')}
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('pricing.premium.title')}</h3>
              <p className="text-gray-600 mb-6">{t('pricing.premium.description')}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-extrabold">
                  {billingPeriod === 'monthly' 
                    ? formatEuroPrice(PREMIUM_PRICE_MONTHLY)
                    : formatEuroPrice(premiumAnnualPrice)
                  }
                </span>
                <span className="text-gray-500 ml-1">
                  {billingPeriod === 'monthly' ? t('pricing.premium.period') : t('pricing.premium.annual_period')}
                </span>
              </div>
              
              {billingPeriod === 'annual' && (
                <div className="mb-6 text-sm text-purple-800 bg-purple-50 px-4 py-2 rounded-lg">
                  {t('pricing.premium.annual_discount')}
                </div>
              )}
              
              <button className="w-full bg-purple-800 hover:bg-purple-900 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                {t('pricing.premium.cta')}
              </button>
            </div>
            
            <div className="bg-gray-50 p-8">
              <h4 className="font-medium text-gray-900 mb-4">O que está incluído:</h4>
              <ul className="space-y-3">
                <li className="flex">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{t('pricing.premium.feature1')}</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{t('pricing.premium.feature2')}</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{t('pricing.premium.feature3')}</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{t('pricing.premium.feature4')}</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{t('pricing.premium.feature5')}</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{t('pricing.premium.feature6')}</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 