import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const CtaSection = () => {
  const { translate, language } = useLanguage();
  
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-playfair font-bold text-3xl md:text-4xl text-white mb-6">
          {language === 'en' ? "Join Us in Making a Difference" : translate('homePage.cta.title')}
        </h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
          {language === 'en' ? "Every contribution matters, no matter how small. Together, we can create a brighter future for children in need." : translate('homePage.cta.description')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white hover:bg-gray-100 text-primary py-6 px-8 rounded-lg shadow-md text-lg">
            {language === 'en' ? "Donate Now" : translate('homePage.cta.donateButton')}
          </Button>
          <Link to="/contact">
            <Button variant="outline" className="bg-primary-600 border-white text-white hover:bg-primary-700 py-6 px-8 rounded-lg text-lg">
              {language === 'en' ? "Contact Us" : translate('homePage.cta.contactButton')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
