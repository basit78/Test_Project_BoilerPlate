import i18next from 'i18next';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import english from './translations/en';
import spanish from './translations/es';

const languageDetector: any = {
  type: 'languageDetector',
  async: true,
  detect: (cb: any) => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {},
};

const resources = {
  en: {
    translation: english,
  },
  es: {
    translation: spanish,
  },
};

i18next.use(languageDetector).use(initReactI18next).init({
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  debug: true,
  resources,
});

export default i18n;
