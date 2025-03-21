
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
  // New translations
  kidsEvents: 'Kids Events',
  kidsEventsSubtitle: 'Moments of Joy and Growth',
  kidsEventsDescription: 'Our children participate in various events throughout the year that promote learning, play, and personal development. Browse through these captured moments that showcase their activities, achievements, and the bonds they form.',
  allPhotos: 'All Photos',
  summerCamp: 'Summer Camp',
  schoolEvents: 'School Events',
  specialCelebrations: 'Special Celebrations',
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
  // New translations
  kidsEvents: 'Eventos para Niños',
  kidsEventsSubtitle: 'Momentos de Alegría y Crecimiento',
  kidsEventsDescription: 'Nuestros niños participan en varios eventos durante el año que promueven el aprendizaje, el juego y el desarrollo personal. Navegue por estos momentos capturados que muestran sus actividades, logros y los vínculos que forman.',
  allPhotos: 'Todas las Fotos',
  summerCamp: 'Campamento de Verano',
  schoolEvents: 'Eventos Escolares',
  specialCelebrations: 'Celebraciones Especiales',
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
  // New translations
  kidsEvents: 'Kinderveranstaltungen',
  kidsEventsSubtitle: 'Momente der Freude und des Wachstums',
  kidsEventsDescription: 'Unsere Kinder nehmen das ganze Jahr über an verschiedenen Veranstaltungen teil, die Lernen, Spiel und persönliche Entwicklung fördern. Durchstöbern Sie diese festgehaltenen Momente, die ihre Aktivitäten, Erfolge und die Bindungen, die sie eingehen, zeigen.',
  allPhotos: 'Alle Fotos',
  summerCamp: 'Sommercamp',
  schoolEvents: 'Schulveranstaltungen',
  specialCelebrations: 'Besondere Feierlichkeiten',
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
