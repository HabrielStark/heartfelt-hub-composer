import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';

const PartnersSection = () => {
  const { translate, language } = useLanguage();
  
  const partners = [
    {
      name: "Partner 1",
      logo: "/partner.png"
    },
    {
      name: "Partner 2",
      logo: "/partner1.png"
    },
    {
      name: "Partner 3",
      logo: "/partner2.PNG"
    },
    {
      name: "Partner 4",
      logo: "/partner3.PNG"
    },
    {
      name: "Partner 5",
      logo: "/partner4.png"
    },
    {
      name: "Partner 6",
      logo: "/partner5.png"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title={translate('homePage.partners.title')}
          subtitle={translate('homePage.partners.subtitle')}
        />
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center h-40 w-full hover:scale-110 transition-all duration-300"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-32 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
