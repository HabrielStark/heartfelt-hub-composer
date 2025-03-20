import React, { createContext, useContext, useState } from 'react';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  translate: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// English translations
const en = {
  home: 'Home',
  about: 'About',
  howToHelp: 'How to Help',
  financialTransparency: 'Financial Transparency',
  contact: 'Contact',
  donateNow: 'Donate Now',
  chooseAmount: 'Choose an amount',
  customAmount: 'Custom amount',
  enterAmount: 'Enter amount',
  cardDetails: 'Card details',
  processing: 'Processing...',
  oneTimeDonation: 'One-time Donation',
  materialAid: 'Material Aid',
  volunteer: 'Volunteer',
  partners: 'Partners',
  currentFundraisers: 'Current Fundraisers',
  viewAllFundraisers: 'View All Fundraisers',
};

// Spanish translations
const es = {
  home: 'Inicio',
  about: 'Acerca de',
  howToHelp: 'Cómo Ayudar',
  financialTransparency: 'Transparencia Financiera',
  contact: 'Contacto',
  donateNow: 'Donar Ahora',
  chooseAmount: 'Elige una cantidad',
  customAmount: 'Cantidad personalizada',
  enterAmount: 'Ingresa el monto',
  cardDetails: 'Detalles de la tarjeta',
  processing: 'Procesando...',
  oneTimeDonation: 'Donación única',
  materialAid: 'Ayuda Material',
  volunteer: 'Voluntario',
  partners: 'Socios',
  currentFundraisers: 'Recaudadores de fondos actuales',
  viewAllFundraisers: 'Ver todos los recaudadores de fondos',
};

// German translations
const de = {
  home: 'Startseite',
  about: 'Über uns',
  howToHelp: 'Wie man hilft',
  financialTransparency: 'Finanzielle Transparenz',
  contact: 'Kontakt',
  donateNow: 'Jetzt spenden',
  chooseAmount: 'Wählen Sie einen Betrag',
  customAmount: 'Individueller Betrag',
  enterAmount: 'Betrag eingeben',
  cardDetails: 'Kartendetails',
  processing: 'Verarbeitung...',
  oneTimeDonation: 'Einmalige Spende',
  materialAid: 'Materielle Hilfe',
  volunteer: 'Freiwilliger',
  partners: 'Partner',
  currentFundraisers: 'Aktuelle Spendenaktionen',
  viewAllFundraisers: 'Alle Spendenaktionen anzeigen',
};

// Define translations map
const translations: Record<string, Record<string, string>> = {
  en,
  es,
  de,
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  const translate = (key: string): string => {
    return translations[language]?.[key] || key;
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
