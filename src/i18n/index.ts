import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importar recursos de tradução
import pt from './locales/pt.json';
import ptPT from './locales/pt-PT.json';
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import it from './locales/it.json';
import de from './locales/de.json';

// Configuração do i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: pt
      },
      'pt-PT': {
        translation: ptPT
      },
      en: {
        translation: en
      },
      es: {
        translation: es
      },
      fr: {
        translation: fr
      },
      it: {
        translation: it
      },
      de: {
        translation: de
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