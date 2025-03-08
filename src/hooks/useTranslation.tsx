'use client'

import { useCallback, useEffect, useState, useMemo } from 'react'
import { useLanguage } from '@/context/LanguageContext'

/**
 * Hook personalizado para gerenciar traduções
 * 
 * @returns Um objeto com funções e estados para gerenciar traduções
 */
export const useTranslation = () => {
  const {
    language,
    t
  } = useLanguage()
  
  // Função para traduzir uma chave
  const translate = useCallback((key: string) => {
    if (!key) return '';
    
    try {
      return t(key);
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return key;
    }
  }, [t]);
  
  // Memoize o valor de retorno para evitar renderizações desnecessárias
  return useMemo(() => ({
    // Funções de tradução
    t: translate,
    
    // Estado do idioma
    language,
    
    // Utilitários
    formatDate: (date: Date, options?: Intl.DateTimeFormatOptions) => {
      const locale = language === 'pt' ? 'pt-BR' : 'en-US';
      return new Intl.DateTimeFormat(locale, options).format(date);
    },
    
    formatNumber: (number: number, options?: Intl.NumberFormatOptions) => {
      const locale = language === 'pt' ? 'pt-BR' : 'en-US';
      return new Intl.NumberFormat(locale, options).format(number);
    },
    
    formatCurrency: (amount: number, options?: Omit<Intl.NumberFormatOptions, 'style' | 'currency'>) => {
      const locale = language === 'pt' ? 'pt-BR' : 'en-US';
      const currency = language === 'pt' ? 'BRL' : 'USD';
      
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        ...options
      }).format(amount);
    }
  }), [
    translate, 
    language
  ]);
}

export default useTranslation 