import { useLanguage } from '@/context/LanguageContext';
import type { Language } from '@/context/LanguageContext';

export type { Language };

export function useI18n() {
  const context = useLanguage();
  
  return {
    t: context.t,
    language: context.language,
    changeLanguage: context.changeLanguage,
    isRTL: false, // Nenhum dos idiomas suportados é RTL
    isLoggedIn: context.isLoggedIn
  };
} 