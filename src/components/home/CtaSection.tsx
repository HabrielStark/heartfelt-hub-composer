import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const CtaSection: React.FC = () => {
  const { translate, language } = useLanguage();
  
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-6">
          {language === 'en' ? "Join Us in Making a Difference" : translate('homePage.cta.title')}
        </h2>
        <p className="max-w-2xl mx-auto text-lg opacity-90 mb-10">
          {language === 'en' ? "Every contribution matters, no matter how small. Together, we can create a brighter future for children in need." : translate('homePage.cta.description')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/donate">
            <Button className="bg-white text-primary hover:bg-gray-100 hover:text-primary-600 font-medium py-2 px-6 rounded-md text-lg shadow-md">
              {language === 'en' ? "Donate Now" : translate('homePage.cta.donateButton')}
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="border-white text-white hover:bg-white/10 hover:border-white/80 py-2 px-6 rounded-md text-lg">
              {language === 'en' ? "Contact Us" : translate('homePage.cta.contactButton')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
