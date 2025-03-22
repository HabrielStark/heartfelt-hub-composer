import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { translate, language } = useLanguage();
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-pastel-purple py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left column with text */}
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-6">
              {language === 'en' ? (
                "Make a Real Difference Together"
              ) : (
                <>
                  {translate('homePage.hero.title')}<br />
                  <span className="text-primary">{translate('homePage.hero.titleHighlight')}</span>
                </>
              )}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              {translate('homePage.hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary-600 text-white py-6 px-8 rounded-lg shadow-md text-lg">
                {translate('homePage.hero.donateButton')}
              </Button>
              <Link to="/how-to-help">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary-100 py-6 px-8 rounded-lg text-lg">
                  {translate('homePage.hero.helpButton')} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right column with image */}
          <div className="md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl animate-float">
              <img 
                src="/IMG_4383.JPG" 
                alt="Happy children playing together" 
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent text-white p-6">
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden md:block absolute -top-24 -right-24 w-96 h-96 bg-primary-100 rounded-full opacity-50"></div>
      <div className="hidden md:block absolute -bottom-32 -left-32 w-80 h-80 bg-pastel-purple rounded-full opacity-40"></div>
    </div>
  );
};

export default HeroSection;