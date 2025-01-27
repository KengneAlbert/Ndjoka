import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => i18n.changeLanguage('fr')}
        className={`px-2 py-1 rounded ${
          i18n.language === 'fr' ? 'bg-yellow-400 text-black' : 'text-gray-400'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`px-2 py-1 rounded ${
          i18n.language === 'en' ? 'bg-yellow-400 text-black' : 'text-gray-400'
        }`}
      >
        EN
      </button>
    </div>
  );
};
