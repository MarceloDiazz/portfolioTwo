import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar los recursos de traducción
import en from "./locales/en/translation.json"
import es from "./locales/es/translation.json"


i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next)  // Integración con React
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    fallbackLng: 'es',  // Idioma por defecto si la detección falla
    interpolation: {
      escapeValue: false, // React ya escapa el contenido por defecto
    },
  });

export default i18n;