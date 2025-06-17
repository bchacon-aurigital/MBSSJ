'use client';

import { useState, useEffect, createContext, useContext } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const module = await import(`../locales/${language}/common.json`);
        setTranslations(module.default);
      } catch (error) {
        console.error('Error loading translations:', error);
        if (language !== 'es') {
          const fallback = await import(`../locales/es/common.json`);
          setTranslations(fallback.default);
        }
      }
    };

    loadTranslations();
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ 
      translations, 
      language, 
      changeLanguage 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default function useTranslation() {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }

  const { translations, language, changeLanguage } = context;

  const t = (key) => {
    const keys = key.split('.');
    let value = translations;

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; 
      }
    }

    return value || key;
  };

  return { t, language, changeLanguage };
} 