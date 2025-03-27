import React, { createContext, useContext, useState, useEffect } from 'react';
import enTranslations from '@/translations/en.json';
import esTranslations from '@/translations/es.json';
import ukTranslations from '@/translations/uk.json';
import heTranslations from '@/translations/he.json';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  translate: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define translations map
const translations: Record<string, any> = {
  en: enTranslations,
  es: esTranslations,
  uk: ukTranslations,
  he: heTranslations,
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  const translate = (key: string): string => {
    // Parse nested keys like "common.toggleTheme"
    const keys = key.split('.');
    let result: any = translations[language];
    
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        // Return the key if translation not found
        return key;
      }
    }
    
    return typeof result === 'string' ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
