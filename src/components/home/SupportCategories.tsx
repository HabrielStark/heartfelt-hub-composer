import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Banknote, Users, Heart, CircleDollarSign } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SupportCategories = () => {
  const { translate, language } = useLanguage();

  const categories = [
    {
      title: language === 'en' ? "Donate" : translate('homePage.supportCategories.donate.title'),
      description: language === 'en' ? "Your financial support helps us provide essential services to those in need." : translate('homePage.supportCategories.donate.description'),
      icon: <Banknote size={24} />,
      href: "/donate",
      color: "bg-primary-100 text-primary"
    },
    {
      title: language === 'en' ? "Volunteer" : translate('homePage.supportCategories.volunteer.title'),
      description: language === 'en' ? "Give your time and skills to help us make a bigger impact in the community." : translate('homePage.supportCategories.volunteer.description'),
      icon: <Users size={24} />,
      href: "/how-to-help?tab=volunteer",
      color: "bg-green-100 text-green-600"
    },
    {
      title: language === 'en' ? "Sponsor" : translate('homePage.supportCategories.sponsor.title'),
      description: language === 'en' ? "Become a corporate sponsor and support our programs while enhancing your brand." : translate('homePage.supportCategories.sponsor.description'),
      icon: <Heart size={24} />,
      href: "/how-to-help?tab=partners",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: language === 'en' ? "Fundraise" : translate('homePage.supportCategories.fundraise.title'),
      description: language === 'en' ? "Start your own fundraising campaign to support our causes and initiatives." : translate('homePage.supportCategories.fundraise.description'),
      icon: <CircleDollarSign size={24} />,
      href: "/how-to-help?tab=donations",
      color: "bg-blue-100 text-blue-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-4">
            {language === 'en' ? "Ways to Support" : translate('homePage.supportCategories.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {language === 'en' ? "Join us in making a difference" : translate('homePage.supportCategories.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className={`rounded-full w-12 h-12 flex items-center justify-center mb-4 ${category.color}`}>
                {category.icon}
              </div>
              <h3 className="font-semibold text-xl mb-3">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <Link to={category.href}>
                <Button variant="outline" className="w-full">
                  {language === 'en' ? "Learn More" : translate('common.learnMore')}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportCategories;
