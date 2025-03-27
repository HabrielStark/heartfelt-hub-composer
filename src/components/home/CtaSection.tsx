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
          {translate('homePage.cta.title')}
        </h2>
        <p className="max-w-2xl mx-auto text-lg opacity-90 mb-10">
          {translate('homePage.cta.description')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/donate">
            <Button className="bg-white text-primary hover:bg-gray-100 hover:text-primary-600 font-semibold py-2 px-6 rounded-md text-lg shadow-md">
              {translate('common.donate')}
            </Button>
          </Link>
          <Link to="/contact">
            <Button className="bg-white text-primary border-white border-2 hover:bg-white/90 font-semibold py-2 px-6 rounded-md text-lg shadow-md">
              {translate('common.contactUs')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
