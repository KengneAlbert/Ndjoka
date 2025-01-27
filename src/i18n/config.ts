import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      common: {
        explore: "Explorer nos produits",
        about: "À propos",
        contact: "Contact",
      }
    }
  },
  en: {
    translation: {
      common: {
        explore: "Explore our products",
        about: "About",
        contact: "Contact",
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr",
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false
    }
  });
