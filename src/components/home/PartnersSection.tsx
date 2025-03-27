import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';

const PartnersSection = () => {
  const { translate, language } = useLanguage();
  
  const partners = [
    {
      name: "ABC Foundation",
      logo: "/IMG_4398.JPG"
    },
    {
      name: "XYZ Corporation",
      logo: "/IMG_4384.JPG"
    },
    {
      name: "Global Helpers",
      logo: "/IMG_4374.JPG"
    },
    {
      name: "Community Bank",
      logo: "/IMG_4405.PNG"
    },
    {
      name: "Caring Partners Inc.",
      logo: "/IMG_4388.JPG"
    }
  ];

  return (
    <section className="py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title={translate('homePage.partners.title')}
          subtitle={translate('homePage.partners.subtitle')}
        />
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 md:h-16 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
