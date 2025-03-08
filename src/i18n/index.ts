import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importar recursos de tradução
import pt from './locales/pt.json';
import en from './locales/en.json';

// Configuração do i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: pt
      },
      en: {
        translation: en
      }
    },
    lng: 'pt', // Idioma padrão
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false // React já escapa os valores
    },
    react: {
      useSuspense: false // Evita problemas com SSR
    }
  });

export default i18n; 