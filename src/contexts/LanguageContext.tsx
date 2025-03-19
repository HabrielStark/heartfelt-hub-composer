
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = {
  code: string;
  name: string;
};

export const languages: Language[] = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
];

type LanguageContextType = {
  currentLanguage: string;
  setLanguage: (code: string) => void;
  translate: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Simple translations dictionary
const translations: Record<string, Record<string, string>> = {
  en: {
    "home": "Home",
    "about": "About Us",
    "howToHelp": "How to Help",
    "financialTransparency": "Financial Transparency",
    "contact": "Contact Us",
    "donateNow": "Donate Now",
  },
  es: {
    "home": "Inicio",
    "about": "Sobre Nosotros",
    "howToHelp": "Cómo Ayudar",
    "financialTransparency": "Transparencia Financiera",
    "contact": "Contáctenos",
    "donateNow": "Donar Ahora",
  },
  fr: {
    "home": "Accueil",
    "about": "À Propos",
    "howToHelp": "Comment Aider",
    "financialTransparency": "Transparence Financière",
    "contact": "Contactez-Nous",
    "donateNow": "Faire un Don",
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const setLanguage = (code: string) => {
    setCurrentLanguage(code);
    document.documentElement.lang = code;
    console.log(`Language changed to: ${code}`);
  };

  const translate = (key: string): string => {
    const lang = currentLanguage;
    return translations[lang]?.[key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, translate }}>
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
